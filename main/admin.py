from django.contrib import admin
from .models import News, Event, Update
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'published_date', 'is_visible', 'is_featured')
    list_editable = ('is_visible', 'is_featured')
    search_fields = ('title', 'description')
    list_filter = ('is_visible', 'published_date')

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'is_visible', 'is_featured')
    list_editable = ('is_visible', 'is_featured')
    search_fields = ('title', 'description')
    list_filter = ('is_visible', 'date')

@admin.register(Update)
class UpdateAdmin(admin.ModelAdmin):
    list_display = ('title', 'published_date', 'is_visible', 'is_featured')
    list_editable = ('is_visible', 'is_featured')
    search_fields = ('title', 'description')
    list_filter = ('is_visible', 'published_date')

class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'is_staff', 'is_superuser', 'is_active', 'last_login')
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups')

admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)