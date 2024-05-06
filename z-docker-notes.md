# Comandos generales
docker history "nombre imagen"
docker history app-react

docker build -t "nombre-imagen" .
docker build -t app-react .

docker build -t "nombre-imagen":"etiqueta" .
docker build -t app-react:1.2.3 .

docker run "nombre imagen" "comando dentro dentro de la imagen"
docker run app-react npm run dev

docker run -it "nombre imagen" sh
docker run -it app-react sh

docker run -> docker pull(si no está en local) + docker create + docker start

docker image remove "nombre-imagen":"tag"
docker image remove app-react:1

docker image tag "nombre:etiqueta-anterior" "nombre:etiqueta-nueva" 
docker image tag app-react:1 app-react:2

# Contenedores en segundo plano
docker run -d -p "puerto_local":"puerto_contenedor" --name "nombre-contenedor" "nombre-imagen:tag"
docker run --name hola-run app-react:2
docker run -d --name hola-run app-react:2

docker logs [OPTIONS] CONTAINER
docker logs -n 5 hola-run
docker logs -t -b 10 hola-run

# Puertos
docker run -d -p 80:5173 holarun e9b
docker ps

#  Ingresar a un contenedor que se encuentra corriendo
docker ps
docker exec -it holamundo sh
exit para salir sin detener el contenedor

docker exec holamundo ls

# Volumenes
docker volume create nombre-volumen
docker volume inspect nombre-volumen

docker run -d -p 3000:3000 -v datos:/app/datos app-react:3
docker ps
docker exec -it 2fb sh

# Abrir otra terminal dentro del mismo docker


# Construir imagenes con docker compose
dentro del contenedor se puede usar ctrl+c para detener el contenedor
docker compose build --help
docker compose build --no-cache

# Eliminar contenedores y las redes creadas
docker compose down

# Acceder a los logs del los contonedores
docker compose up --build -d
docker compose logs --help

# Redes
docker compose up -d
docker network ls

# Teniendo 2 archivos de docker-compose
docker compose -f docker-compose.prod.yml up --build

# Ejecutar comando al crear contenedor
docker compose run backend django-admin startproject demo .