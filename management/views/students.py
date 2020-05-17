from management.models import Student
from rest_framework import generics
from management.Services.BaseService import Base
from management.serializers.StudentSerializer import StudentSerializer ,StudentSelectSerializer

class StudentList(generics.ListCreateAPIView):
    queryset = Student.objects.all().order_by("student_name")
    serializer_class = StudentSerializer

    def perform_create(self, serializer):
            serializer.save(student_number= Base(newStudent=self.request).generateStudentNumber(), grade_name = Base(newStudent=self.request).getGradeName())

class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all().order_by("student_name")
    serializer_class = StudentSerializer

    def perform_update(self, serializer):
            serializer.save( grade_name = Base(newStudent=self.request).getGradeName())

class StudentSelect(generics.ListAPIView):
    queryset = Student.objects.all().order_by("student_name")
    serializer_class = StudentSelectSerializer

class StudentsListByGrade(generics.ListAPIView):
    students_list = Student.objects.all()
    serializer_class = StudentSelectSerializer

    def get_queryset(self):
        return self.students_list.filter(grade_id = self.kwargs.get('id')).order_by("student_name")
