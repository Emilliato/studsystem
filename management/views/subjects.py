from management.models import Subject
from rest_framework import generics
from management.Services.BaseService import Base
from management.serializers.SubjectSerializer import SubjectSerializer ,SubjectSelectSerializer

class SubjectList(generics.ListCreateAPIView):
    queryset = Subject.objects.all().order_by("subject_name")
    serializer_class = SubjectSerializer


class SubjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subject.objects.all().order_by("subject_name")
    serializer_class = SubjectSerializer



class SubjectSelect(generics.ListAPIView):
    queryset = Subject.objects.all().order_by("subject_name")
    serializer_class = SubjectSelectSerializer