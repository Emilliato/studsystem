
from django.urls import path
from management.views import grades

app_name = 'management.appUrls'
urlpatterns = [
    path('grades', grades.GradeList.as_view()),
    path('grades/<int:pk>/', grades.GradeDetail.as_view())
]

