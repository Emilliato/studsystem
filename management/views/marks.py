from management.models import Mark
from rest_framework import  generics
from management.serializers.MarkSerializer import MarkSerializer


class MarkList(generics.ListCreateAPIView):
    queryset = Mark.objects.all().order_by("mark_type")
    serializer_class = MarkSerializer

class MarkDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Mark.objects.all().order_by("mark_type")
    serializer_class = MarkSerializer