from django.urls import path
from management.views import subjects  

app_name = 'all_subjects'
urlpatterns = [
    path('subjects', subjects.SubjectList.as_view(), name='subject_list'),
    path('subject_select', subjects.SubjectSelect.as_view(), name='subject_select'),
    path('subjects/<int:pk>/', subjects.SubjectDetail.as_view(), name='subject_details')
]
