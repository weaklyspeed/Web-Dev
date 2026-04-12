from django.urls import path
from .views import (ProductListAPIView, ProductDetailAPIView, CategoryListAPIView, CategoryDetailAPIView, CategoryProductAPIView)

urlpatterns = [
    path('products/', ProductListAPIView.as_view(), name='product_list'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='product_detail'),
    path('categories/', CategoryListAPIView.as_view(), name='category_list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='category_detail'),
    path('categories/<int:category_id>/products/', CategoryProductAPIView.as_view(), name='category_products'),
]