from django.urls import include, path, reverse
from rest_framework.test import APITestCase, URLPatternsTestCase


class GradeTests(APITestCase, URLPatternsTestCase):
    urlpatterns = [
        path('api/', include('management.appUrls.gUrls')),
    ]

    def test_create_grade(self):
        """
        Ensure we can create a new account object.
        """
        url = reverse('all_grades:grade_list')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 4)