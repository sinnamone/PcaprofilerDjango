"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from all_models import views as all_models_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',all_models_views.index, name='index'),
    path('clinical_annotation/',all_models_views.clinical_annotation, name='clinical_annotation'),
    path('article/',all_models_views.article, name='article'),
    path('contact/',all_models_views.contact, name='contact'),
    path('clinical/',all_models_views.clinical, name='clinical'),
    path('clinical2/',all_models_views.clinical2, name='clinical2'),
    path('clinical3/', all_models_views.clinical3, name='clinical3'),
    path('clinical4/', all_models_views.clinical4, name='clinical4'),
    path('clinical5/', all_models_views.clinical5, name='clinical5'),
    path('clinical6/', all_models_views.clinical6, name='clinical6'),
    path('clinical7/', all_models_views.clinical7, name='clinical7'),
    path('genes/',all_models_views.genes, name='genes'),
    path('pathway/',all_models_views.pathway, name='pathway'),
    path('genetics/',all_models_views.genetics, name='genetics'),
    path('mrna_cna/',all_models_views.mrna_cna, name='mrna_cna'),
    path('profile_your_same/',all_models_views.profile_your_same, name='profile_your_same'),
]


"""for Lodaing Static files in django """

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

"""End Of  Lodaing Static files in django """

