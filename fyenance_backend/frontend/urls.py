from django.urls import path
from .views import index, freeView

app_name = 'frontend'

urlpatterns = [
    path('', freeView),
    path('about/', freeView),
    # path('join', index),
    # path('create', index),
    # path('room/<str:roomCode>', index),
    path('transactions/', freeView),
    # path('categories/', index),
    path('budgets/', freeView),
    path('settings/', index),
    path('dashboard/', freeView),
]
