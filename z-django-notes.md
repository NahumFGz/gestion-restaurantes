django-admin startproject "nombre_projecto" .

django-admin startapp "nombre_app"
python manage.py startapp "nombreapp"

python manage.py makemigrations "nombre app"

python manage.py migrate

python3 manage.py createsuperuser 

python3 manage.py runserver

# Documentación de migrations
https://docs.djangoproject.com/en/4.0/topics/migrations/

# Copiar a portapapeles
pwd | pbcopy

# venv
coreapi==2.3.3
django-cors-headers==4.3.1
djangorestframework==3.15.1
pip-chill==1.0.3


# Listar servidores que se van a permitir conectar
https://pypi.org/project/django-cors-headers/

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]

# Documentación de la API
https://www.django-rest-framework.org/community/3.10-announcement/

REST_FRAMEWORK = {
    ...: ...,
    "DEFAULT_SCHEMA_CLASS": "rest_framework.schemas.coreapi.AutoSchema",
}

# Otra libreria de documentacion 
https://drf-yasg.readthedocs.io/en/stable/readme.html?highlight=usage#usage