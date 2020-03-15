from django.urls import path
from management.views import students  

app_name = 'management.appUrls'
urlpatterns = [
    path('students', students.StudentList.as_view()),
    path('students/<int:pk>/', students.StudentDetail.as_view())
]
