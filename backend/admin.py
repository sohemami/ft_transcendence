from django.contrib import admin
from .models import ChatMessage, GameSession

admin.site.register(ChatMessage)
admin.site.register(GameSession)