from management.models import Grade
from rest_framework import  generics
from management.serializers.GradeSerializer import GradeSerializer


class GradeList(generics.ListCreateAPIView):
    queryset = Grade.objects.all().order_by("name")
    serializer_class = GradeSerializer

class GradeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Grade.objects.all().order_by("name")
    serializer_class = GradeSerializer
    
        