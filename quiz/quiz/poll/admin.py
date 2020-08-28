from django.contrib import admin

# Register your models here.
from .models import QuestionMaster,Question,Choice,AnswerList,LastQuestion



admin.site.register(QuestionMaster)
admin.site.register(Question)
admin.site.register(Choice)

admin.site.register(AnswerList)
admin.site.register(LastQuestion)