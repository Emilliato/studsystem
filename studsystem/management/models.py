from django.db import models
from django.db.models.signals import post_save, post_delete
from datetime import timezone
from enum import Enum
from django_mysql.models import ListCharField, ListTextField

class Terms(Enum):
    T1 = "TERM1"
    T2 = "TERM2"
    T3 = "TERM3"
    T4 = "TERM4"

class Grade(models.Model):
    grade_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=10)
    grade_year = models.CharField(max_length=4,null=False, default='2020') 
    number_of_students = models.IntegerField(blank=True, null=True)
    average = models.IntegerField(blank=True, null=True)
    date_created = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        db_table = 'grade'
    
    def __str__(self):
        return '\t\t\t'.join([self.name, self.grade_year])
        
def increase(id):
    totalStudents = Student.objects.filter(grade_id=id).count()
    grade_to_update = Grade.objects.get(pk= id)
    grade_to_update.number_of_students = totalStudents
    grade_to_update.save(update_fields=['number_of_students'])

def decrease(id):
    grade_to_update = Grade.objects.get(pk= id)
    grade_to_update.number_of_students -= 1
    grade_to_update.save(update_fields=['number_of_students'])

def increaseAndDecrease(increaseId, decreaseId):
    increase(increaseId)
    decrease(decreaseId)

def updateGrade(sender,**kwargs):
    if kwargs['created']:
        grade_id = kwargs['instance'].grade_id_id
        increase(grade_id)
    else:
        gradeIdInc = kwargs['instance'].grade_id_id
        gradeIdDec = kwargs['instance'].prev_grade_id
        increaseAndDecrease(gradeIdInc,gradeIdDec)

def onDelete(sender,**kwargs):
    grade_id = kwargs['instance'].grade_id_id
    decrease(grade_id)

        


class Mark(models.Model):
    mark_id = models.AutoField(primary_key=True)
    mark_type = models.CharField(max_length=4, blank=True, null=True)
    mark_name = models.CharField(max_length=10)
    mark = models.DecimalField(max_digits=10, decimal_places=0)
    subject = models.ForeignKey('Subject', models.CASCADE)
    term = models.CharField(max_length=5,choices=[(tag , tag.value) for tag in Terms], default= "TERM1")
    date_created = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)
    class Meta:
        db_table = 'mark'


class ParentDetails(models.Model):
    parent_details_id = models.AutoField(primary_key=True)
    name = models.CharField(unique=True, max_length=25, blank=True, null=True)
    surname = models.CharField(max_length=25, blank=True, null=True)
    cell = models.CharField(max_length=25, blank=True, null=True)
    email = models.CharField(max_length=25, blank=True, null=True)
    occupation = models.CharField(max_length=25, blank=True, null=True)
    student = models.ForeignKey('Student', models.CASCADE)
    date_created = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)
    class Meta:
        db_table = 'parent_details'


class Student(models.Model):
    student_id = models.AutoField(primary_key=True)
    student_number = models.CharField(unique=True, max_length=25)
    student_name = models.CharField(max_length=25)
    student_surname = models.CharField(max_length=25)
    grade_id = models.ForeignKey(Grade, models.CASCADE)
    prev_grade_id = models.IntegerField(default=0)
    grade_name= models.CharField(max_length=10, default='')
    date_created = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)
    class Meta:
        db_table = 'student'
    def __str__(self):
        return '\t\t\t'.join([self.student_name, self.student_surname, self.student_number])


class StudentAddress(models.Model):
    address_id = models.AutoField(primary_key=True)
    street_address = models.CharField(unique=True, max_length=25)
    location = models.CharField(max_length=25, blank=True, null=True)
    town = models.CharField(max_length=25, blank=True, null=True)
    province = models.CharField(max_length=25, blank=True, null=True)
    student = models.ForeignKey('Student', models.CASCADE)

    date_created = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        db_table = 'student_address'

class StudentDetails(models.Model):
    student_details_id = models.AutoField(primary_key=True)
    age = models.IntegerField(blank=True, null=True)
    gender = models.CharField(max_length=1, blank=True, null=True)
    id_number = models.CharField(max_length=25, blank=True, null=True)
    cell_number = models.CharField(max_length=25, blank=True, null=True)
    email = models.CharField(max_length=25, blank=True, null=True)
    student = models.ForeignKey(Student, models.CASCADE)
    date_created = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        db_table = 'student_details'


class Subject(models.Model):
    subject_id = models.AutoField(primary_key=True)
    subject_name = models.CharField(max_length=10)
    grade = models.ForeignKey(Grade, models.CASCADE)
    students = ListCharField( base_field=models.IntegerField(), size=6, max_length=(10 * 11) , default=[])
    active = models.BooleanField(default=True)
    date_created = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'subject'

post_save.connect(updateGrade,sender=Student)
post_delete.connect(onDelete,sender=Student)