from django.db import models
from ckeditor.fields import RichTextField
import bleach
from html import unescape
from django.urls import reverse
from django.conf import settings

class News(models.Model):

    class Meta:
        db_table = 'news'

    title = RichTextField(help_text="Вы можете использовать HTML или стилизовать текст с разными цветами.")
    description = RichTextField(blank=True, verbose_name='Текст новости:')
    
    news_image = models.ImageField(upload_to='content_image', null=True, verbose_name='Изображение для новости')
    content_image = models.ImageField(upload_to='news_imgs', null=True, verbose_name='Фон для блока новости')
    
    published_date = models.DateField(auto_now_add=True, verbose_name='Дата публикации')
    is_visible = models.BooleanField(default=True, verbose_name="Показывать новость")
    is_featured = models.BooleanField(default=False, verbose_name="Отображать в главном блоке")

    def save(self, *args, **kwargs):
        # Уберите bleach.clean, чтобы оставить CKEditor форматирование
        self.description = unescape(self.description)  # Декодирует HTML-сущности, если они были добавлены
        if self.is_featured:
            News.objects.filter(is_featured=True).update(is_featured=False)
        super().save(*args, **kwargs)


    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('news_detail', args=[self.pk])



class Event(models.Model):
    title = RichTextField(max_length=255, verbose_name='Название события')
    description = models.TextField(verbose_name='Описание события:')
    date = models.DateTimeField(verbose_name='Дата события')
    is_visible = models.BooleanField(default=True, verbose_name="Показывать событие")
    is_featured = models.BooleanField(default=False, verbose_name="Отображать в главном блоке")
    event_image = models.ImageField(
        upload_to='event_imgs', 
        null=True,
        blank=True, 
        verbose_name='Изображение для Events'
    )
    event_content_image = models.ImageField(
        upload_to='content_imgs', 
        null=True, 
        blank=True,
        verbose_name='Фон для Events'
    )

    def save(self, *args, **kwargs):
        self.description = bleach.clean(self.description, tags=[], strip=True)
        self.description = unescape(self.description)
        if self.is_featured:
            Event.objects.filter(is_featured=True).update(is_featured=False)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse('event_detail', args=[self.pk])  # Замените 'event_detail' на имя вашей страницы
    
    class Meta:
        db_table = 'event'



class Update(models.Model):
    title = RichTextField(max_length=255, verbose_name='Название обновления')
    content = models.TextField(verbose_name='Описание обновления:')
    published_date = models.DateField(auto_now_add=True, verbose_name='Дата публикации')
    is_visible = models.BooleanField(default=True, verbose_name="Показывать обновление")
    is_featured = models.BooleanField(default=False, verbose_name="Отображать в главном блоке")
    update_image = models.ImageField(
        upload_to='update_imgs', 
        null=True, 
        blank=True,
        verbose_name='Изображение для новости'
    )
    update_content_image = models.ImageField(
        upload_to='content_imgs', 
        null=True, 
        blank=True,
        verbose_name='Фон для блока новости'
    )

    def save(self, *args, **kwargs):
        self.description = bleach.clean(self.description, tags=[], strip=True)
        self.description = unescape(self.description)
        if self.is_featured:
            Update.objects.filter(is_featured=True).update(is_featured=False)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse('update_detail', args=[self.pk])  # Замените 'update_detail' на имя вашей страницы
    
    class Meta:
        db_table = 'update'

