from django.db import models
from django.contrib.auth.models import User
# Create your models here.

Admin = 'ADMINISTRATOR'
Supervisor = 'SUPERVISOR'
Student = 'STUDENT'

ROLES = (
    (Admin, 'Administrator'), 
    (Supervisor, 'Supervisor'), 
    (Student, 'Student'), 
)

# test1234-----rahul---rahul@gmail.com
class UserModel(models.Model):
    user=models.OneToOneField(User,null=True,blank=True,on_delete=models.CASCADE)
    mobile_number = models.CharField(unique=True,max_length=30,blank=True,null=True)
    email = models.EmailField(max_length=254,null=True,blank=True,unique=True)
    role = models.CharField(blank=False, choices=ROLES,max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    date_of_joining = models.DateField(blank=True,null=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f'The employee name is {self.user}'