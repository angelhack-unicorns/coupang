import base64
from typing import Any

from django.http import HttpRequest
from pydantic import BaseModel

from ninja import NinjaAPI
from ninja import File
from ninja.files import UploadedFile
from ninja.security import HttpBearer

import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth

from .models import CustomUser

from .openaiwrapper import OpenAIWrapper
from .coupangscraper import CoupangScraper

cred = credentials.Certificate("./firebase-private-key.json")
firebase_admin.initialize_app(cred)

class FirebaseAuthBearer(HttpBearer):
  def authenticate(self, request: HttpRequest, token: str) -> Any | None:
    try:
      decoded_token = auth.verify_id_token(token)
      uid = decoded_token.get("uid")
      email = decoded_token.get("email")
      name = decoded_token.get("name", "")
      user = self.get_or_create_user(uid, email, name)
      return user
    except Exception as e:
      print("exception: ", e)
      return None
  def get_or_create_user(self, uid, email, name):
    user, created = CustomUser.objects.get_or_create(
      email=email,
      defaults={"uid": uid, "name": name}
    )
    return user

api = NinjaAPI()

openai_wrapper = OpenAIWrapper()
coupang_scraper = CoupangScraper()

@api.get("/hello")
def hello(request):
  return {"message": "Hello, World!"}

class AIRequestSchema(BaseModel):
  user_message: str

@api.post("/ai", auth=FirebaseAuthBearer())
def ai(request, data: AIRequestSchema):
  user_request = request.auth
  ai_response_json = openai_wrapper.send_prompt(data.user_message)
  user_db = CustomUser.objects.get(email=user_request.email)
  user_db.user_prompt = data.user_message
  user_db.assistant_response = ai_response_json
  user_db.save()
  return {"openai_response": ai_response_json}

class ShopRequestSchema(BaseModel):
  item: str

@api.post("/shop")
def shop(request, data: ShopRequestSchema):
  shop_response = coupang_scraper.make_request(data.item)
  return {"shop_response": shop_response}

def encode_image_file(image_file: UploadedFile) -> str:
  return base64.b64encode(image_file.read()).decode("utf-8")

@api.post("/image", auth=FirebaseAuthBearer())
def upload_image(request, image: UploadedFile = File(...)):
  user_request = request.auth
  user_db = CustomUser.objects.get(email=user_request.email)
  if user_db.assistant_response == "":
    return {"error": "please send a message first"}
  base64_image = encode_image_file(image)
  ai_response = openai_wrapper.send_image_with_user_prompt(base64_image, user_db.user_prompt, user_db.assistant_response)
  return {"openai_response": ai_response}