from management.models import ParentDetails
from rest_framework import  generics
from management.serializers.ParentDetailsSerializer import ParentDetailsSerializer


class ParentDetailsList(generics.ListCreateAPIView):
    queryset = ParentDetails.objects.all().order_by("name")
    serializer_class = ParentDetailsSerializer

class ParentDetailsDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = ParentDetails.objects.all().order_by("name")
    serializer_class = ParentDetailsSerializer