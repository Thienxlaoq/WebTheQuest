from django.contrib import admin
from .models import News
from django.db.models.fields import CharField
from django.forms.widgets import TextInput

class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'published_date', 'description')
    exclude = ('published_date',)  # Исключаем поле из формы

admin.site.register(News, NewsAdmin)
