# Generated by Django 5.1.3 on 2024-12-09 00:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0017_alter_news_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='content_image',
            field=models.ImageField(null=True, upload_to='content_imgs/', verbose_name='Фон для блока новости'),
        ),
        migrations.AlterField(
            model_name='news',
            name='news_image',
            field=models.ImageField(null=True, upload_to='news-imgs/', verbose_name='Изображение для новости'),
        ),
    ]