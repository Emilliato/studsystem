from rest_framework import  status, serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import  RegistrationSerializer
from rest_framework.authtoken.models import  Token
from .models import  User

@api_view(['POST',])
def registration_view(request):
    if(request.method == 'POST'):
        serializer = RegistrationSerializer(data= request.data)
        data ={}
        if serializer.is_valid():
            user = serializer.save()
            data['response'] = "Registration successfull"
            data['email'] = user.email
            data['username'] = user.username
            data['first_name']= user.first_name
            data['last_name'] = user.last_name
            token = Token.objects.get(user=user).key
            data['token'] = token
        else:
            data = serializer.errors
        return Response(data)

@api_view(['GET',])
def profile_view(request,token):
    data = {}
    if(request.method == 'GET'):
        userId = Token.objects.get(key=token).user_id
        user = User.objects.get(pk=userId)
        data['email'] = user.email
        data['username'] = user.username
        data['last_name'] = user.last_name
    else:
        data = {"Error": "Bad Request"}       
    return Response(data)