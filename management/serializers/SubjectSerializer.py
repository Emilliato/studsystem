from management.models import Subject
from rest_framework import serializers
from django.db import models

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['subject_id','subject_name','grade','students','grade_name','active','date_created']
        read_only_fields = ('date_created',)

class SubjectSelectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['subject_id','subject_name','grade', 'active']
        read_only_fields = ('subject_id','subject_name','grade', 'active')

