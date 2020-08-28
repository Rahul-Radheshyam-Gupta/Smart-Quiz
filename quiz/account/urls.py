from django.urls import path
from .views import signup,login_page,log_out
app_name = 'account'
urlpatterns = [
    path('signup/',signup,name='signup'),
    path('login/',login_page,name='login'),
    path('logout/',log_out,name='logout')
]