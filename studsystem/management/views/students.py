from management.models import Student
from rest_framework import generics
from management.serializers.StudentSerializer import StudentSerializer

class StudentList(generics.ListCreateAPIView):
    queryset = Student.objects.all().order_by("student_name")
    serializer_class = StudentSerializer

class StudentDetail(generics.RetrieveDestroyAPIView):
    queryset = Student.objects.all().order_by("student_name")
    serializer_class = StudentSerializer
