from django.urls import path
from .views import (BookCreatListView)

urlpatterns = [
    path('books/', BookCreatListView.as_view(), name='book-list'),
]