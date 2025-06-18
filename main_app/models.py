from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    publishedDate = models.DateField('Published Date')
    numberOfPages = models.IntegerField ()

    user = models. ForeignKey(User,on_delete=models. CASCADE)


    def __str__(self):
        
        return f'{self.title} by {self.author}'