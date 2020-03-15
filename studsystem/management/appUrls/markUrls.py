from django.urls import path
from management.views import marks

app_name = 'management.appUrls'
urlpatterns = [
    path('marks', marks.MarkList.as_view()),
    path('marks/<int:pk>/', marks.MarkDetail.as_view())
]