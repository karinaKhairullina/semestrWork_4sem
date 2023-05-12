from django.contrib import admin
from django.urls import path, include
from .views import home_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("authorization.urls")),
    path("", include("myClothes.urls")),
    path("", include("fashionShows.urls")),
    path("home/", home_view, name="home"),
    path('', include('social_django.urls', namespace='social')),
]


