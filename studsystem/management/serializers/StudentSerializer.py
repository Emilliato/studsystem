from management.models import Student
from rest_framework import serializers
from django.db import models

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['student_id','student_number','student_name','student_surname','grade', 'active','date_created']
        read_only_fields = ('student_number','date_created',)

class StudentSelectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['student_id','student_number','student_name', 'active']
        read_only_fields = ('student_id','student_number','student_name', 'active')

