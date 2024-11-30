from ckeditor.fields import RichTextField
from django.db import models


class News(models.Model):
    title = RichTextField(help_text="Вы можете использовать HTML или стилизовать текст с разными цветами.")
    description = models.TextField(blank=True, verbose_name='Текст новости:')
    news_image = models.ImageField(upload_to='news-imgs', null=True, verbose_name='Изображение для новости')
    content_image = models.ImageField(upload_to='content_imgs', null=True, verbose_name='Изображение для блока новости')
    published_date = models.DateField(auto_now_add=True, verbose_name='Дата публикации')
    is_visible = models.BooleanField(default=True, verbose_name="Показывать новость")


    def __str__(self):
        return self.title


class Event(models.Model):
    title = RichTextField(max_length=255, verbose_name='Название события')
    description = models.TextField(verbose_name='Описание события:')
    date = models.DateTimeField(verbose_name='Дата события')
    is_visible = models.BooleanField(default=True, verbose_name="Показывать событие")
    event_image = models.ImageField(upload_to='event-content-imgs', null=True, blank=True, verbose_name='Фоновое изображение')
    image = models.ImageField(
    upload_to='event-imgs',
    null=True,
    blank=True,
    verbose_name='Изображение для события',
    default='default-event.png'
)

    def __str__(self):
        return self.title


class Update(models.Model):
    title = RichTextField(max_length=255, verbose_name='Название обновления')
    content = models.TextField(verbose_name='Описание обновления:')
    published_date = models.DateField(auto_now_add=True, verbose_name='Дата публикации')
    is_visible = models.BooleanField(default=True, verbose_name="Показывать обновление")
    update_image = models.ImageField(upload_to='update-content-imgs', null=True, blank=True, verbose_name='Фоновое изображение')
    icon = models.ImageField(
    upload_to='update-icons',
    null=True,
    blank=True,
    verbose_name='Иконка для обновления',
    default='default-update.png'
)

    def __str__(self):
        return self.title
