from django.urls import path
from .views import BookCreatListView, BookDetailView

urlpatterns = [
    path('books/', BookCreatListView.as_view(), name='book-list'),
    path('books/<int:pk>/', BookDetailView.as_view(), name='book-ditail'),
]