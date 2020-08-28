from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class QuestionMaster(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=250,null=True,blank=True)
    created_date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    def __str__(self):
        return f'{self.title}'

class Question(models.Model):
    question_master = models.ForeignKey(QuestionMaster,on_delete=models.CASCADE)
    question_text = models.CharField(max_length=200)
    created_date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.question_master} :-  {self.question_text}'

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)    #uses id Question class id to do linking
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    correct_choice = models.BooleanField(max_length = 200, default=False)

    def __str__(self):
        return f'{self.question} --   {self.choice_text}'


# Each answer stored
class AnswerList(models.Model):
    question_master = models.ForeignKey(QuestionMaster,on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    selected_choice = models.ForeignKey(Choice, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)

    def __str__(self):
        return f'Answer Qm,Q -- {self.question_master} {self.question}'

# Last attempted before Logging Out
class LastQuestion(models.Model):
    question_master = models.ForeignKey(QuestionMaster,on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE, null=True, blank= True)
    user = models.ForeignKey(User,on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f'Last Question Qm,Q -- {self.question_master} {self.question}'



