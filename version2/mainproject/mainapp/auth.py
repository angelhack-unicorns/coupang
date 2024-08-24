from typing import Any

from django.http import HttpRequest
from ninja.security import HttpBearer
from firebase_admin import auth
from .models import CustomUser

import firebase_admin
from firebase_admin import credentials

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

