from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from .models import QuestionMaster,Question,Choice,AnswerList,LastQuestion
from django.views.generic.base import TemplateView

# Function based dashboard view named as home
def home(request):
    question_master = QuestionMaster.objects.all()
    return render(request,'poll/dashboard.html',{'question_master':question_master})
    
# Class based dashboard view named as Dashboard
class Dashboard(TemplateView):
    template_name = 'poll/dashboard.html'
    
    def get_context_data(self, *args, **kwargs):
        context = super(Dashboard, self).get_context_data(*args, **kwargs)
        context['question_master'] = QuestionMaster.objects.all()
        return context


def quiz(request,id):
    qm = id
    question_master = QuestionMaster.objects.get(id=id)
    question_list = question_master.question_set.all()
    data =  []
    for question in question_list:
        question_with_choices = {}
        choices = []
        for choice in question.choice_set.all():
            choices.append(choice)
        question_with_choices['question_master'] = qm
        question_with_choices['question'] = question
        question_with_choices['choices'] = choices
        data.append(question_with_choices)

        
    return render(request,'poll/quiz1.html',{'quiz_data':data})



def quiz_add(request):

    question_id = request.POST.get("question")
    selected_choice_id = request.POST.get("choice")
    question_master_id = request.POST.get("question_master")
    question_master = QuestionMaster.objects.get(id=question_master_id)
    selected_choice = Choice.objects.get(id=selected_choice_id)
    question = Question.objects.get(id=question_id)
    user = request.user
    try:
        answer = AnswerList.objects.get(question=question,question_master=question_master,user=user) 
        answer.selected_choice = selected_choice
        answer.save()
    except DoesExist.AnswerList:
        answer = AnswerList.objects.create(question=question,selected_choice=selected_choice,question_master=question_master,user=user) 

    return JsonResponse('successful',safe=False,status=200)

def quiz_detail(request,id):
    user = request.user
    question_master = QuestionMaster.objects.get(id=id)
    answers = AnswerList.objects.filter(question_master=question_master,user=user)

    data = []
    for answer in answers:
        a = {}
        a['question'] = answer.question
        a['correct_choice'] = a['question'].choice_set.get(correct_choice = True)
        a['selected_choice'] = answer.selected_choice
        data.append(a)
    return render(request,'poll/quiz_detail.html',{"data":data})



