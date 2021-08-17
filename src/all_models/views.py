from django.shortcuts import render

# Create your views here.


def viewTemplate(request):
    return render(request, 'index.html')