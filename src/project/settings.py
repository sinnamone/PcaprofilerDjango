"""
Django settings for project project.

Generated by 'django-admin startproject' using Django 3.1.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.1/ref/settings/
"""

from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve(strict=True).parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '@&%n)z7r-_m(4kb_i7q%-oyzsyduv9$!b-dt#6a=s1s++zp%zl'

# we will check the environ variable if defined
try:
    if os.environ["DEBUG"] == "1":
        DEBUG = True
    else:
        DEBUG = False
except Exception as e:
    print(str(e))
    DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'all_models',
    #third_party
    "django.contrib.sites",
    "allauth",
    "allauth.account",
]

# required for 'django.contrib.sites' which is required by rest-auth or all-auth
SITE_ID = 1

ACCOUNT_USER_MODEL_USERNAME_FIELD = None
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_AUTHENTICATION_METHOD = "email"
ACCOUNT_EMAIL_VERIFICATION = "mandatory"
ACCOUNT_CONFIRM_EMAIL_ON_GET = True
ACCOUNT_EMAIL_CONFIRMATION_ANONYMOUS_REDIRECT_URL = (
    "http://localhost:8026/email_verified"
)
OLD_PASSWORD_FIELD_ENABLED = True

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'project.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'project.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

#DATABASES = {
#    'default': {
#        'ENGINE': 'django.db.backends.sqlite3',
#        'NAME': BASE_DIR / 'db.sqlite3',
#    }
#}


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

# STATIC_ROOT -- where collect static saves files
STATIC_ROOT = str(BASE_DIR / ".." / "staticfiles")

STATIC_URL = "/static/"

# STATICFILES_DIRS -- This setting defines the additional locations the collect static app will traverse
STATICFILES_DIRS = [str(BASE_DIR / "static")]


MEDIA_URL = "/media/"
# note this is the path as per the docker not as per this system
MEDIA_ROOT = str(BASE_DIR / ".." / "media")

AUTH_USER_MODEL = "all_models.User"


#####################################################
# CUSTOMIZE THESE SETTINGS <BEGINS>
#####################################################

# change the EMAIL BACKEND ONE WANTS TO USE
# Email settings  (currently we are using file based email backed)
EMAIL_FILE_PATH = str(BASE_DIR / ".." / "sent_emails")
EMAIL_BACKEND = "django.core.mail.backends.filebased.EmailBackend"

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

# change the NAME, USER, PASSWORD AND HOST the way one needs
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": "project",
        "USER": "django",
        "PASSWORD": "django",
        "HOST": "128.199.100.68",
        "PORT": "5432",
    }
}

#####################################################
# CUSTOMIZE THESE SETTINGS <ENDS>
#####################################################

#####################################################
# MISC: DONT TOUCH THE BELOW <BEGINS>
#####################################################

import os

# install snoop for this
# https://github.com/alexmojaki/snoop
import snoop
from cheap_repr import find_repr_function
import six


def path(event):
    return event.code.co_filename[-20:]


find_repr_function(object).maxparts = 100000000
find_repr_function(dict).maxparts = 100000000
find_repr_function(list).maxparts = 100000000
find_repr_function(six.text_type).maxparts = 500000000
find_repr_function(six.binary_type).maxparts = 100000000


snoop.install(enabled=DEBUG, columns=[path, "function"])

if DEBUG:

    PROJECT_HOME = os.path.dirname(os.path.realpath(__file__))
    print(f"PROJECT_HOME :: {PROJECT_HOME}")

    if os.path.exists(
        os.path.join(PROJECT_HOME, "external_config", "api_local_settings_fixed.py")
    ):
        from .external_config.api_local_settings_fixed import *  # noqa

    if os.path.exists(
        os.path.join(PROJECT_HOME, "external_config", "api_local_settings_var.py")
    ):
        from .external_config.api_local_settings_var import *  # noqa

#####################################################
# MISC: DONT TOUCH THE BELOW <END>
#####################################################