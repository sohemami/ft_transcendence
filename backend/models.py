from django.db import models
from django.contrib.auth.models import User

# Modèle pour les messages de chat
class ChatMessage(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='messages')
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.author.username + ' ' + self.timestamp.strftime('%Y-%m-%d %H:%M:%S')

# Modèle pour les parties de jeu
class GameSession(models.Model):
    players = models.ManyToManyField(User, related_name='game_sessions')
    start_time = models.DateTimeField(auto_now_add=True)
    end_time = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Session started at {self.start_time.strftime('%Y-%m-%d %H:%M:%S')}"
