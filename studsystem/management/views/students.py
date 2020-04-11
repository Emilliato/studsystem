from management.models import Student
from rest_framework import generics
from management.Services.BaseService import Base
from management.serializers.StudentSerializer import StudentSerializer ,StudentSelectSerializer

class StudentList(generics.ListCreateAPIView):
    queryset = Student.objects.all().order_by("student_name")
    serializer_class = StudentSerializer

    def perform_create(self, serializer):
            serializer.save(student_number= Base(newStudent=self.request).generateStudentNumber())

class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all().order_by("student_name")
    serializer_class = StudentSerializer

class StudentSelect(generics.ListAPIView):
    queryset = Student.objects.all().order_by("student_name")
    serializer_class = StudentSelectSerializer