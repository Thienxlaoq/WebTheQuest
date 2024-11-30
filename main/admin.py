from django.contrib import admin
from .models import News, Event, Update

class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'published_date', 'is_visible')
    list_editable = ('is_visible',)
    search_fields = ('title', 'description')
    list_filter = ('is_visible', 'published_date')

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'is_visible')
    list_editable = ('is_visible',)
    search_fields = ('title', 'description')
    list_filter = ('is_visible', 'date')

@admin.register(Update)
class UpdateAdmin(admin.ModelAdmin):
    list_display = ('title', 'published_date', 'is_visible')
    list_editable = ('is_visible',)
    search_fields = ('title', 'description')
    list_filter = ('is_visible', 'published_date')

admin.site.unregister(Event)  # Убираем модель, если была автоматически зарегистрирована
admin.site.unregister(Update)
admin.site.register(News, NewsAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(Update, UpdateAdmin)

# Переопределяем порядок отображения
admin.site.index_title = "Управление контентом"
admin.site.site_header = "Админка проекта"
admin.site.site_title = "Админка"
