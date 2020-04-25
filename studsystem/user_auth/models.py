from django.db import models
from django.contrib.auth.models import  AbstractUser

#For auth token 
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

class User(AbstractUser):
    email = models.EmailField(verbose_name='email', max_length=255, unique=True)
    phone = models.CharField(max_length=12, null=True)
    REQUIRED_FIELDS = ['username','first_name','last_name']
    USERNAME_FIELD = 'email'

    def get_username(self):
        return self.email

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created= False, **kwargs):
    if created:
        Token.objects.create(user=instance)