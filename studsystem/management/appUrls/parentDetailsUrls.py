from django.urls import path
from management.views import parentDetails

app_name = 'management.appUrls'
urlpatterns = [
    path('parentDetails', parentDetails.ParentDetailsList.as_view()),
    path('parentDetails/<int:pk>/', parentDetails.ParentDetailsDetails.as_view())
]