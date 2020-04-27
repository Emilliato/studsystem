from management.models import Grade
from rest_framework import serializers


class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = ['grade_id','name','grade_year','number_of_students','average', 'active','date_created' ]


