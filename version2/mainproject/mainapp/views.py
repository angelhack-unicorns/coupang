import base64
import json
import requests
from pydantic import BaseModel

from ninja import NinjaAPI
from ninja import File
from ninja.files import UploadedFile

from .models import CustomUser
from .apps import default_user

from .openaiwrapper import OpenAIWrapper
from .coupangscraper import CoupangScraper

api = NinjaAPI()

openai_wrapper = OpenAIWrapper()
coupang_scraper = CoupangScraper()

class AIRequestSchema(BaseModel):
  user_message: str

@api.post("/user-message")
def ai(request, data: AIRequestSchema):
  ai_response_json = openai_wrapper.handle_user_message(data.user_message)
  user_db = CustomUser.objects.get(email=default_user["email"])
  user_db.user_message = data.user_message
  user_db.assistant_message = ai_response_json
  user_db.save()
  ai_response = json.loads(ai_response_json)

  for i in range(len(ai_response["items"])):
    ai_response["items"][i]["name"] = ai_response["items"][i]["name"].lower()
  
  items = []
  for item in ai_response["items"]:
    item = item["name"].replace(" ", "+")
    items.append(item) 
  items_text = " ".join(items)

  print("items_text: ", items_text)
  
  response = requests.get(f"http://localhost:8080/request", data=items_text)
  response_json = response.json()
  
  print("response_json: ", response_json)

  for response_item in response_json:
    print(response_item)
    for index, ai_item in enumerate(ai_response["items"]):
      if ai_item["name"] == response_item["item"].replace("+", " "):
        response_item_json = json.loads(response_item["item_info_json"])
        ai_response["items"][index]["coupang_info"] = response_item_json
  return ai_response

def encode_image_file(image_file: UploadedFile) -> str:
  return base64.b64encode(image_file.read()).decode("utf-8")

@api.post("/image-upload")
def upload_image(request, image: UploadedFile = File(...)):
  user_db = CustomUser.objects.get(email=default_user["email"])
  if user_db.assistant_message == "":
    return {"error": "please send a message first"}
  base64_image = encode_image_file(image)
  ai_response_json = openai_wrapper.handle_image_upload(base64_image, user_db.user_message, user_db.assistant_message)
  ai_response = json.loads(ai_response_json)

  for i in range(len(ai_response["items"])):
    ai_response["items"][i]["name"] = ai_response["items"][i]["name"].lower()
  
  items = []
  for item in ai_response["items"]:
    item = item["name"].replace(" ", "+")
    items.append(item) 
  items_text = " ".join(items)

  print("items_text: ", items_text)
  
  response = requests.get(f"http://localhost:8080/request", data=items_text)
  response_json = response.json()
  
  print("response_json: ", response_json)

  for response_item in response_json:
    print(response_item)
    for index, ai_item in enumerate(ai_response["items"]):
      if ai_item["name"] == response_item["item"].replace("+", " "):
        response_item_json = json.loads(response_item["item_info_json"])
        ai_response["items"][index]["coupang_info"] = response_item_json
  
  return ai_response

@api.get("/hello")
def hello(request):
  return {"message": "Hello, World!"}

