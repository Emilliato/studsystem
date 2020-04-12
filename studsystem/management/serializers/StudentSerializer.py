from management.models import Student, Grade
from management.serializers.GradeSerializer import GradeSerializer
from rest_framework import serializers
from django.db import models

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['student_id','student_number','student_name','student_surname','grade_id','grade_name','active','date_created','prev_grade_id']
        read_only_fields = ('student_number','date_created','grade_name',)

class StudentSelectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['student_id','student_number','student_name', 'active']
        read_only_fields = ('student_id','student_number','student_name', 'active')

