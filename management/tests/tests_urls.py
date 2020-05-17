from django.test import SimpleTestCase
from django.urls import reverse,  resolve
from management.views.grades import GradeList, GradeDetail
from management.views.students import StudentList, StudentDetail, StudentSelect,StudentsListByGrade
from management.views.subjects import SubjectList, SubjectDetail, SubjectSelect

class  TestGradeUrls(SimpleTestCase):

    def test_grade_list_url_is_resolved(self):
        url = reverse('all_grades:grade_list')
        self.assertEquals(resolve(url).func.view_class, GradeList)

    def test_grade_details_url_is_resolved(self):
        url = reverse('all_grades:grade_details',args=['1'])
        self.assertEquals(resolve(url).func.view_class, GradeDetail)

class  TestStudentUrls(SimpleTestCase):

    def test_student_list_url_is_resolved(self):
        url = reverse('all_students:student_list')
        self.assertEquals(resolve(url).func.view_class, StudentList)

    def test_students_select_url_is_resolved(self):
        url = reverse('all_students:student_select')
        self.assertEquals(resolve(url).func.view_class, StudentSelect)

    def test_students_details_url_is_resolved(self):
        url = reverse('all_students:student_details',args=['1'])
        self.assertEquals(resolve(url).func.view_class, StudentDetail)

    def test_students_list_by_grade_url_is_resolved(self):
        url = reverse('all_students:student_collection',args=['1'])
        self.assertEquals(resolve(url).func.view_class, StudentsListByGrade)

class  TestSubjectUrls(SimpleTestCase):

    def test_subject_list_url_is_resolved(self):
        url = reverse('all_subjects:subject_list')
        self.assertEquals(resolve(url).func.view_class, SubjectList)

    def test_subject_select_url_is_resolved(self):
        url = reverse('all_subjects:subject_select')
        self.assertEquals(resolve(url).func.view_class, SubjectSelect)

    def test_subject_details_url_is_resolved(self):
        url = reverse('all_subjects:subject_details',args=['1'])

        self.assertEquals(resolve(url).func.view_class, SubjectDetail)