# Generated by Django 5.1.3 on 2024-12-12 09:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='event',
            table='event',
        ),
        migrations.AlterModelTable(
            name='news',
            table='news',
        ),
        migrations.AlterModelTable(
            name='update',
            table='update',
        ),
    ]