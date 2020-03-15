from django.contrib import admin
from django.urls import path, include 
urlpatterns = [
    path('admin/',admin.site.urls),
    path('api/', include('management.appUrls.gUrls')),
    path('api/', include('management.appUrls.sUrls')),
    path('api/', include('management.appUrls.markUrls')),
    path('api/', include('management.appUrls.parentDetailsUrls'))
]