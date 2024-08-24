from django.db import models

class CustomUser(models.Model):
  email = models.EmailField(unique=True)
  user_message = models.CharField(max_length=1000, default="")
  assistant_message = models.CharField(max_length=1000, default="")
  def __str__(self):
    return self.email