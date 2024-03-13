from django.contrib import admin
from .models import UserProfile, ChatMessage, GameSession

# enregistrement du UserProfile
@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'display_name', 'wins', 'losses', 'winrate')

# enregistrement du ChatMessage
@admin.register(ChatMessage)
class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ('author', 'message', 'timestamp')

# enregistrement du GameSession
@admin.register(GameSession)
class GameSessionAdmin(admin.ModelAdmin):
    list_display = ('start_time', 'end_time', 'settings')
