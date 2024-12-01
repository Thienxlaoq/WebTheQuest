from django.contrib import admin
from .models import News, Event, Update

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

