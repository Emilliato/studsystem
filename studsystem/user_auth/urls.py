
from django.urls import path
from . import views
from rest_framework.authtoken.views import obtain_auth_token


app_name = 'user_auth'

urlpatterns = [
    path('register', views.registration_view , name='register'),
    path('login', obtain_auth_token , name='login')
]
