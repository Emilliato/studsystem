from management.models import Mark
from rest_framework import serializers


class MarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mark
        fields = ['mark_id','mark_type','mark_name', 'mark', 'subject']

