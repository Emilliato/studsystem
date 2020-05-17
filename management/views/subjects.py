from management.models import Subject
from rest_framework import generics
from management.Services.BaseSubjectService import SubjectService
from management.serializers.SubjectSerializer import SubjectSerializer ,SubjectSelectSerializer

class SubjectList(generics.ListCreateAPIView):
    queryset = Subject.objects.all().order_by("subject_name")
    serializer_class = SubjectSerializer
    
    def  perform_create(self, serializer):
        serializer.save( grade_name = SubjectService(newSubject=self.request).getGradeName())

class SubjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Subject.objects.all().order_by("subject_name")
    serializer_class = SubjectSerializer

    def perform_update(self, serializer):
        serializer.save( grade_name = SubjectService(newSubject=self.request).getGradeName())


class SubjectSelect(generics.ListAPIView):
    queryset = Subject.objects.all().order_by("subject_name")
    serializer_class = SubjectSelectSerializer