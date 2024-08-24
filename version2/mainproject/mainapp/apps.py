import sys

from django.apps import AppConfig
from django.apps import apps

default_user = {
  "email": "coupang@coupang.com"
}

class MainappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'mainapp'
    def ready(self):
        if 'runserver' in sys.argv:
            create_user_if_not_exists()

def create_user_if_not_exists():
    CustomUser = apps.get_model("mainapp", "CustomUser")
    if not CustomUser.objects.filter(email=default_user["email"]).exists():
        CustomUser.objects.create(email=default_user["email"])
        
