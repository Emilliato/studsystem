from django.test import TestCase, Client
from django.urls import reverse, resolve

from management.models import Grade, Student,Subject
from user_auth.models import User
import json

class TestGradeViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.statusCodes = {
            'SUCCESS_200_OK': 200,
            'SUCCESS_201_CREATED': 201,
            'ERROR_404_NOT_FOUND': 404,
            'SUCCESS_204_DELETE': 204
        }
        self.grade1 = Grade.objects.create(
            name= "Grade1",
            grade_year = '2020',
            active = 1
        )
        self.grade2 = Grade.objects.create(
            name= "Grade3",
            grade_year = '2020',
            active = 1
        )
        self.new_grade = {
            'name':'Grade2',
            'grade_year': '2020',
            'active' : 1
        }
        self.update_grade = {
            'name':'Grade25',
            'active' : 0
        }
        self.get_base_url = reverse('all_grades:grade_list')
        self.detail_base_url = reverse('all_grades:grade_details', args=[self.grade2.grade_id])
        self.invalid_grade_details_url = reverse('all_grades:grade_details', args=['23'])
        

    def test_Grade_List_GET(self):
        response = self.client.get(self.get_base_url)
        self.assertEquals(response.status_code,self.statusCodes['SUCCESS_200_OK'])

    def test_Grade_GET(self):
        response = self.client.get(self.detail_base_url)
        self.assertEquals(response.status_code,self.statusCodes['SUCCESS_200_OK'])

    def test_Grade_GET_Not_Found(self):
        response = self.client.get(self.invalid_grade_details_url)
        self.assertEquals(response.status_code,self.statusCodes['ERROR_404_NOT_FOUND'])
    
    def test_Grade_Create_POST(self):
        response = self.client.post(self.get_base_url, self.new_grade)
        self.assertEquals(response.status_code,self.statusCodes['SUCCESS_201_CREATED'])
        self.assertEquals(Grade.objects.get(name=self.new_grade['name']).active,self.new_grade['active'])

    def test_Grade_Update_PUT(self):
        grade_id = Grade.objects.last().grade_id
        response = self.client.put(reverse('all_grades:grade_details', args=[grade_id]),data= json.dumps(self.update_grade), content_type='application/json')
        self.assertEquals(response.status_code,self.statusCodes['SUCCESS_200_OK'])
        self.assertEquals(Grade.objects.get(pk=grade_id).active,self.update_grade['active'])
        self.assertEquals(Grade.objects.get(pk=grade_id).name,self.update_grade['name'])

    def test_Grade_DELETE(self):
        grade_id = Grade.objects.first().grade_id
        response = self.client.delete(reverse('all_grades:grade_details', args=[grade_id]))
        self.assertEquals(response.status_code,self.statusCodes['SUCCESS_204_DELETE'])

class  TestStudentViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.grade1 = Grade.objects.create(
            name= "Grade1",
            grade_year = '2020',
            active = 1
        )
        self.student1 = Student.objects.create(
            student_name = 'Emillio',
            student_surname = 'Marambo',
            grade_id = self.grade1,
            active = 1
        )
        self.new_student = {
            'student_name':'Itai',
            'student_surname':'Tazvivinga',
            'grade_id':self.grade1.grade_id,
            'active': '1'
        }
        self.update_student ={
            'student_name' :'Tineyi',
            'active':0
        }

        self.statusCodes = {
            'SUCCESS_200_OK': 200,
            'SUCCESS_201_CREATED': 201,
            'ERROR_404_NOT_FOUND': 404,
            'SUCCESS_204_DELETE': 204
        }
        self.student_list_url = reverse('all_students:student_list')
        self.student_select_url = reverse('all_students:student_select')
        self.student_detail_url = 'all_students:student_details'

    def test_Student_list_GET(self):
        response = self.client.get(self.student_list_url)
        self.assertEquals(response.status_code,self.statusCodes['SUCCESS_200_OK'])

    def test_Student_select_GET(self):
        response = self.client.get(self.student_select_url)
        self.assertEquals(response.status_code,self.statusCodes['SUCCESS_200_OK'])

    def test_Student_GET_Not_Found(self):
        response = self.client.get(reverse(self.student_detail_url, args=[200]))
        self.assertEquals(response.status_code,self.statusCodes['ERROR_404_NOT_FOUND'])

    def test_Student_GET(self):
        response = self.client.get(reverse(self.student_detail_url, args=[1]))
        self.assertEquals(response.status_code,self.statusCodes['SUCCESS_200_OK'])

    # def test_Student_Create_POST(self):
    #     response = self.client.post(self.student_list_url, self.new_student)
    #     self.assertEquals(response.status_code,self.statusCodes['SUCCESS_201_CREATED'])
    #     self.assertEquals(Student.objects.get(name=self.new_student['student_name']).active,self.new_student['active'])

    # def test_Student_Update_PUT(self):
    #     student_id = Student.objects.first().student_id
    #     response = self.client.put(reverse(self.student_detail_url, args=[student_id]),data= json.dumps(self.update_student), content_type='application/json')
    #     self.assertEquals(response.status_code,self.statusCodes['SUCCESS_200_OK'])
    #     self.assertEquals(Student.objects.get(pk=student_id).active,self.update_student['active'])
    #     self.assertEquals(Student.objects.get(pk=student_id).student_name,self.update_student['student_name'])

class  TestSubjectViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.grade1 = Grade.objects.create(
            name= "Grade1",
            grade_year = '2020',
            active = 1
        )
        self.student1 = Student.objects.create(
            student_name = 'Emillio',
            student_surname = 'Marambo',
            grade_id = self.grade1,
            active = 1
        )
        self.subject1 = Subject.objects.create(
            subject_name = 'Test Sub',
            grade = self.grade1,
            students = ['1'],
            active = 1
        )
        self.new_subject = {
            'subject_name':'Sub1',
            'grade_id':self.grade1.grade_id,
            'students': ['1'],
            'active': '1'
        }
        self.update_subject ={
            'subject_name' :'Sub2',
            'active':0
        }

        self.statusCodes = {
            'SUCCESS_200_OK': 200,
            'SUCCESS_201_CREATED': 201,
            'ERROR_404_NOT_FOUND': 404,
            'SUCCESS_204_DELETE': 204
        }
        self.subject_list_url = reverse('all_subjects:subject_list')
        self.subject_select_url = reverse('all_subjects:subject_select')
        self.subject_detail_url = 'all_subjects:subject_details'

    def test_Subject_list_GET(self):
        response = self.client.get(self.subject_list_url)
        self.assertEquals(response.status_code,self.statusCodes['SUCCESS_200_OK'])

    def test_Subject_select_GET(self):
        response = self.client.get(self.subject_select_url)
        self.assertEquals(response.status_code,self.statusCodes['SUCCESS_200_OK'])

    def test_Subject_GET_Not_Found(self):
        response = self.client.get(reverse(self.subject_detail_url, args=[200]))
        self.assertEquals(response.status_code,self.statusCodes['ERROR_404_NOT_FOUND'])

    def test_Subject_GET(self):
        response = self.client.get(reverse(self.subject_detail_url, args=[self.subject1.subject_id]))
        self.assertEquals(response.status_code,self.statusCodes['SUCCESS_200_OK'])

    # def test_Subject_Create_POST(self):
    #     response = self.client.post(path=self.subject_list_url, data=self.new_subject)
    #     self.assertEquals(response.status_code,self.statusCodes['SUCCESS_201_CREATED'])
    #     self.assertEquals(Subject.objects.get(name=self.new_subject['subject_name']).active,self.new_subject['active'])

