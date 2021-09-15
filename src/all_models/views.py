from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'index.html')


def clinical_annotation(request):
    return render(request, 'clinical_annotation.html')

def article(request):
    return render(request, 'article.html')

def contact(request):
    return render(request, 'contact.html')

def clinical(request):
    return render(request, 'clinical.html')

def genes(request):
    return render(request, 'genes.html')

def pathway(request):
    return render(request, 'pathway.html')

def genetics(request):
    return render(request, 'genetics.html')

def mrna_cna(request):
    return render(request, 'mrna_cna.html')

def profile_your_same(request):
    return render(request, 'profile_your_same.html')


