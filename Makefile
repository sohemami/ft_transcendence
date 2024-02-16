# Makefile pour la gestion des services docker-compose

# Variables
DC = docker-compose

# Règle par défaut
all: up

# Règles principales
up: ## Démarrer l'application
	@$(DC) up --build -d

down: ## Arrêter et supprimer tous les conteneurs
	@$(DC) down

clean: down ## Nettoyer l'application
	@$(DC) rm -v
	@$(DC) down --volumes

re: fclean up ## Reconstruire et démarrer l'application

ref: fresh up ## Gros redémarrage de l'application

fclean: ## Nettoyage forcé : arrêter tous les conteneurs et élaguer le système
	@if [ -n "$$(docker ps -aq)" ]; then \
		docker stop $$(docker ps -aq); \
		docker rm $$(docker ps -aq); \
	fi
	@docker system prune -af

fresh: ## Réinitialiser l'environnement Docker à un état complètement propre
	@if [ -n "$$(docker ps -aq)" ]; then \
		echo "Arrêt et suppression de tous les conteneurs..."; \
		docker stop $$(docker ps -aq); \
		docker rm $$(docker ps -aq); \
	fi
	@if [ -n "$$(docker images -q)" ]; then \
		echo "Suppression de toutes les images..."; \
		docker rmi -f $$(docker images -q); \
	fi
	@echo "Suppression de tous les volumes..."
	@docker volume prune -f
	@echo "Suppression de tous les réseaux..."
	@docker network prune -f
	@echo "Suppression de tous les caches de construction..."
	@docker builder prune -af
	@echo "L'environnement Docker est maintenant propre !"

tail: ## Afficher les journaux des conteneurs en cours d'exécution en mode "suivre"
	@$(DC) logs -f

logs: ## Afficher les journaux de tous les conteneurs
	@$(DC) logs

# Déclarer les cibles fictives
.PHONY: all up down clean fclean re tail logs reset reset_script
