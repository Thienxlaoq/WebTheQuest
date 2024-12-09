from django.db import models
from ckeditor.fields import RichTextField

# Убедитесь, что у вас настроен GCS как DEFAULT_FILE_STORAGE в settings.py

class News(models.Model):
    title = RichTextField(help_text="Вы можете использовать HTML или стилизовать текст с разными цветами.")
    description = RichTextField(blank=True, verbose_name='Текст новости:')
    news_image = models.ImageField(upload_to='news-imgs/', null=True, verbose_name='Изображение для новости')
    content_image = models.ImageField(upload_to='content_imgs/', null=True, verbose_name='Фон для блока новости')
    published_date = models.DateField(auto_now_add=True, verbose_name='Дата публикации')
    is_visible = models.BooleanField(default=True, verbose_name="Показывать новость")
    is_featured = models.BooleanField(default=False, verbose_name="Отображать в главном блоке")

    def save(self, *args, **kwargs):
        if self.is_featured:
            News.objects.filter(is_featured=True).update(is_featured=False)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class Event(models.Model):
    title = RichTextField(max_length=255, verbose_name='Название события')
    description = models.TextField(verbose_name='Описание события:')
    date = models.DateTimeField(verbose_name='Дата события')
    is_visible = models.BooleanField(default=True, verbose_name="Показывать событие")
    is_featured = models.BooleanField(default=False, verbose_name="Отображать в главном блоке")
    event_image = models.ImageField(
        upload_to='event_imgs', 
        null=True, 
        verbose_name='Изображение для Events'
    )
    event_content_image = models.ImageField(
        upload_to='content_imgs', 
        null=True, 
        verbose_name='Фон для Events'
    )

    def save(self, *args, **kwargs):
        if self.is_featured:
            Event.objects.filter(is_featured=True).update(is_featured=False)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class Update(models.Model):
    title = RichTextField(max_length=255, verbose_name='Название обновления')
    content = models.TextField(verbose_name='Описание обновления:')
    published_date = models.DateField(auto_now_add=True, verbose_name='Дата публикации')
    is_visible = models.BooleanField(default=True, verbose_name="Показывать обновление")
    is_featured = models.BooleanField(default=False, verbose_name="Отображать в главном блоке")
    update_image = models.ImageField(
        upload_to='update_imgs', 
        null=True, 
        verbose_name='Изображение для новости'
    )
    update_content_image = models.ImageField(
        upload_to='content_imgs', 
        null=True, 
        verbose_name='Фон для блока новости'
    )

    def save(self, *args, **kwargs):
        if self.is_featured:
            Update.objects.filter(is_featured=True).update(is_featured=False)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
