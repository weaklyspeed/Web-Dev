from rest_framework import serializers
from .models import Product, Category

# serializer c comme un traducteur de Py/Django model object a JSON ou de JSON request a PY data validés a model object
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'



