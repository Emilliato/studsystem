from django.contrib import admin
from .models import *
# Register your models here.
class IStudentInline(admin.TabularInline):
    model = Student
class GradeAdmin(admin.ModelAdmin):
    fields = ['name','grade_year', 'term']
    inlines = [IStudentInline]

admin.site.register(Grade, GradeAdmin)