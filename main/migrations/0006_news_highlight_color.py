# Generated by Django 5.1.3 on 2024-11-30 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_remove_news_background_image_news_news_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='highlight_color',
            field=models.CharField(default='#ffffff', help_text='Цвет для выделения текста в формате HEX (например, #FFD700)', max_length=7),
        ),
    ]
