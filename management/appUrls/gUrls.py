
from django.urls import path
from management.views import grades

app_name = 'all_grades'
urlpatterns = [
    path('grades', grades.GradeList.as_view(), name='grade_list'),
    path('grades/<int:pk>/', grades.GradeDetail.as_view(), name='grade_details')
]

