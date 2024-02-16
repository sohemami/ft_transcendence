# Utilisez l'image officielle Node.js comme image parent
FROM node:latest

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json
COPY package*.json ./

# Installez les dépendances du projet, y compris http-server globalement
RUN npm install
RUN npm install -g http-server

# Copiez les fichiers et dossiers du projet dans le répertoire de travail actuel (/app)
COPY . .

# Exposez le port sur lequel l'application va tourner
EXPOSE 3000

# Commande pour démarrer votre application
CMD ["http-server", "public", "-p", "3000"]

