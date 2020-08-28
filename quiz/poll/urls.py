from django.urls import path
from .views import home,Dashboard,quiz,quiz_add,quiz_detail
app_name = 'poll'
urlpatterns = [
    path('home/',home,name='home'),
    path('dashboard/',Dashboard.as_view(),name='dashboard'),
    path('quiz/<int:id>',quiz,name='quiz'),
    path('add/',quiz_add,name='add'),
    path('detail/<int:id>',quiz_detail,name='quiz-detail'),
]