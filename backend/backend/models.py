from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
    friends = models.ManyToManyField('self', blank=True)

    def __str__(self):
        return self.user.username

class ChatMessage(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='messages')
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.author.username} at {self.timestamp.strftime('%Y-%m-%d %H:%M:%S')}"

class GameSession(models.Model):
    players = models.ManyToManyField(User, related_name='game_sessions')
    start_time = models.DateTimeField(auto_now_add=True)
    end_time = models.DateTimeField(null=True, blank=True)
    settings = models.JSONField(default=dict) # pour stocker des configuration de jeu personnalisées ??
    
    def __str__(self):
        return f"Session started at {self.start_time.strftime('%Y-%m-%d %H:%M:%S')}"

