from django.contrib import admin
from .models import News, Event, Update

class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'published_date', 'is_visible', 'description')
    list_editable = ('is_visible',)  # Поле для редактирования в списке
    list_filter = ('is_visible', 'published_date')  # Фильтр для удобного поиска
    search_fields = ('title', 'description')

admin.site.register(News, NewsAdmin)

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'is_visible')
    list_editable = ('is_visible',)
    search_fields = ('title', 'description')

@admin.register(Update)
class UpdateAdmin(admin.ModelAdmin):
    list_display = ('title', 'published_date', 'is_visible')
    list_editable = ('is_visible',)
    search_fields = ('title', 'content')
