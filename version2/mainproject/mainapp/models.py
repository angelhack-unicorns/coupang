from django.db import models

class CustomUser(models.Model):
  email = models.EmailField(unique=True)
  uid = models.CharField(max_length=100, unique=True)
  name = models.CharField(max_length=100, default="")
  user_prompt = models.CharField(max_length=1000, default="")
  assistant_response = models.CharField(max_length=1000, default="")
  def __str__(self):
    return self.email