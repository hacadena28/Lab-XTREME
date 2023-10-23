
FROM node:14 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Usar una imagen base con un servidor web (por ejemplo, Nginx)
FROM nginx:alpine

# Copiar los archivos estáticos de la aplicación Angular en el directorio de Nginx
COPY ./src/app/dist/* /usr/share/nginx/html/

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]