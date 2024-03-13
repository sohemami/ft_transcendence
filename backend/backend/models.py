from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    display_name = models.CharField(max_length=255, unique=True)
    avatar = models.ImageField(upload_to='avatars/', default='avatars/default.png')
    wins = models.PositiveIntegerField(default=0)
    losses = models.PositiveIntegerField(default=0)

    @property
    def winrate(self):
        total_games = self.wins + self.losses
        return (self.wins / total_games * 100) if total_games > 0 else 0

    def __str__(self):
        return self.user.username

# creation automatique ou maj du profil utilisateur
@receiver(post_save, sender=User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
    instance.Userprofile.save()

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

