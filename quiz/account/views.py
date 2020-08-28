from django.shortcuts import render,redirect
from django.http import HttpResponse,HttpResponseRedirect
from django.contrib.auth import authenticate,login as system_login,logout
from django.contrib.auth.models import User
from django.urls import reverse
def signup(request):
    if request.method == 'POST':
        print("in post sign up",request.POST)
        username = request.POST.get('username')
        password = request.POST.get('password1')
        email = request.POST.get('email')
        u = User.objects.create_user(username,email,password)
        u.save()


        #do authentication
        user = authenticate(request,username=username,password=password)
        print('user ',user)
        # after signup direct run login 
        system_login(request,user)
        return HttpResponseRedirect(reverse('poll:dashboard'))
    return render(request,'account/signup.html')


def login_page(request):
    print("req post ",request.POST)
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password1')
        
        # pass to auth
        auth_user = authenticate(username=username,password=password)
        print('auth_user ',auth_user)
        # check authentication
        # auth = user if authenticated successfully else auth =None
        
        if auth_user is not None:
            system_login(request,auth_user)
            return HttpResponseRedirect(reverse('poll:dashboard'))
        else:
            return render(request,'account/login.html',{'error':'Please Check user name or password.'})

    return render(request,'account/login.html',{})
    

def log_out(request):
	logout(request)
	return redirect(reverse('account:login'))

