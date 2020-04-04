from django.db import models
from datetime import timezone
from enum import Enum

class Terms(Enum):
    T1 = "TERM1"
    T2 = "TERM2"
    T3 = "TERM3"
    T4 = "TERM4"

class Grade(models.Model):
    grade_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=10)
    grade_year = models.CharField(max_length=4,null=False, default='2020')  # This field type is a guess.
    number_of_students = models.IntegerField(blank=True, null=True)
    average = models.IntegerField(blank=True, null=True)
    date_created = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        db_table = 'grade'
    
    def __str__(self):
        return '\t\t\t'.join([self.name, self.grade_year])


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
    grade = models.ForeignKey(Grade, models.CASCADE)
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
    final_mark = models.DecimalField(max_digits=10, decimal_places=0, blank=True, null=True)
    student = models.ForeignKey(Student, models.CASCADE, blank=True, null=True)
    grade = models.ForeignKey(Grade, models.CASCADE)
    date_created = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        db_table = 'subject'
