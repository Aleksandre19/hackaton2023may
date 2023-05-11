# Generated by Django 3.2.6 on 2023-05-11 16:44

from django.db import migrations, models
import starwars_auth.models


class Migration(migrations.Migration):

    dependencies = [
        ('starwars_auth', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='user',
            managers=[
                ('objects', starwars_auth.models.StarwarsUserManager()),
            ],
        ),
        migrations.RemoveField(
            model_name='user',
            name='username',
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=254, unique=True, verbose_name='email address'),
        ),
    ]
