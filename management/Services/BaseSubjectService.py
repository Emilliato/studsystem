from management.models import Subject, Grade

class SubjectService():
    def __init__(self, newSubject):
        self.grade = newSubject.data['grade']

    def getGradeName(self):
        grade = Grade.objects.get(pk=self.grade)
        return grade.name

