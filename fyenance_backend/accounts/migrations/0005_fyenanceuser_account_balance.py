# Generated by Django 5.0.7 on 2024-12-26 19:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0004_remove_fyenanceuser_session_key"),
    ]

    operations = [
        migrations.AddField(
            model_name="fyenanceuser",
            name="account_balance",
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
    ]
