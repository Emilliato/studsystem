from django.urls import path
from management.views import parentDetails

app_name = 'parentdetails'
urlpatterns = [
    path('parentDetails', parentDetails.ParentDetailsList.as_view()),
    path('parentDetails/<int:pk>/', parentDetails.ParentDetailsDetails.as_view())
]