from management.models import ParentDetails
from rest_framework import serializers

class ParentDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParentDetails
        fields = ['parent_details_id','name','surname','cell', 'email', 'occupation','student']
        