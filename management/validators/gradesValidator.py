from management.models import Grade, Student,Subject
from django.shortcuts import get_list_or_404, get_object_or_404
from management.exceptions.exeptions import ModelNotFoundException, RecordInUse, DuplicateException

def notFoundError(id,text):
    return ' '.join([text,"with id:", id, "Not found."])
def gradeAlreadyExist(model):
    return ' '.join(["Grade with the following details already exist", "Name:",model.name,"Year:", model.grade_year,"Term:", model.term])
def recordInUse(klass):
    return ' '.join(["The Grade you are trying to delete is being used in", klass.Meta.db_table])

def findModel(id):
    try:
        model = get_object_or_404(Grade, pk=id)
        return model
    except:
        raise ModelNotFoundException(notFoundError(id,"Grade"))
    
def getStudents(id):
    try:
        students = get_list_or_404(Student, grade_id=id)
        return students
    except :
        pass

def getSubjects(id):
    try:
        subjects = get_list_or_404(Subject,grade_id= id)
        return subjects
    except:
        pass

def crossValidate(id):
    grade = findModel(id)
    try:
        subjects = getSubjects(model.grade_id)
        raise RecordInUse(recordInUse(Subject))
    except:
        pass
        
    try:
        students =  getStudents(model.grade_id)
        raise RecordInUse(recordInUse(Student))
    except:
        pass

def validateModel(model):
    try:
        db_model = get_object_or_404(Grade,pk = model.grade_id, name = model.name, grade_year= model.grade_year,term=model.term)
        raise DuplicateException(gradeAlreadyExist(db_model))
    except:
        pass
