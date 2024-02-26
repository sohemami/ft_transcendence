# Utiliser l'image officielle de Python 3.12.2 comme base
FROM python:3.12.2

# Définir une variable d'environnement pour que la sortie Python soit envoyée directement au terminal sans être mise en tampon
ENV PYTHONUNBUFFERED=1

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier requirements.txt dans le répertoire de travail actuel
COPY requirements.txt .

# Exposer le port 8080 pour permettre la communication vers/dans le conteneur
EXPOSE 8080

# Installer les dépendances Python spécifiées dans requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# Installer le client PostgreSQL pour permettre l'exécution des commandes psql dans le conteneur
RUN apt-get update && apt-get install -y postgresql-client

# Définir la commande par défaut pour exécuter l'application Django
CMD python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8080

