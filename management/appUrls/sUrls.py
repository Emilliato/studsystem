from django.urls import path
from management.views import students  

app_name = 'all_students'
urlpatterns = [
    path('students', students.StudentList.as_view(), name='student_list'),
    path('student_select', students.StudentSelect.as_view(), name='student_select'),
    path('students/<int:pk>/', students.StudentDetail.as_view(), name='student_details'),
    path('studentscollection/<int:id>/', students.StudentsList.as_view(), name='student_collection')
]
