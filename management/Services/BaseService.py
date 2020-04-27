from management.models import Student, Grade
from django.shortcuts import get_list_or_404
from django.http import Http404
from django.utils import timezone
from datetime import datetime

class Base():
    def __init__(self, newStudent):
        self.newStudent = newStudent.data
        self.s_name = self.newStudent['student_name']
        self.ss_name = self.newStudent['student_surname']

    def getCurrentYear(self):
        return datetime.strftime(timezone.now(),'%y')[-2:]

    def generateStudentNumber(self):
        collection = Student.objects.order_by('-date_created')
        self.duplicateCheck()
        initialID = 1
        firstNameInitial =self.s_name[0].upper()
        lastNameInitial = self.ss_name[0].upper()

        putYear = ''.join([firstNameInitial,lastNameInitial,self.getCurrentYear()])

        # Get previous student number id and increament
        if(len(collection)>0):
            initialID = str(int(collection[0].student_number[-4:]) + 1).zfill(4)
            return ''.join([putYear,initialID])
        else:
            return ''.join([putYear,str(initialID).zfill(4)])

    def duplicateCheck(self):
        students = Student.objects.filter(student_name = self.s_name, student_surname = self.ss_name)
        if(len(students)>0):
            raise Http404("Please Ensure That Name And Surname Are Unique")
    def getGradeName(self):
        grade = Grade.objects.get(pk=self.newStudent['grade_id'])
        #Add duplicate check in here for update as well
        return grade.name

