from  management.models import Grade
class GradeModel():
    def __init__(self,id,name,year,term):
        self.id = id
        self.name = name
        self.year = year
        self.term =term
        self.description = '-'.join([self.name,self.year,self.term])



        