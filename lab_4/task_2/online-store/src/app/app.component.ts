import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCategoryId = signal<number | null>(null);
  
  categories = this.productService.getCategoriesList();
  
  selectedCategoryProducts = computed(() => {
    const categoryId = this.selectedCategoryId();
    if (categoryId === null) return [];
    return this.productService.getProductsByCategory(categoryId);
  });

  selectedCategoryName = computed(() => {
    const categoryId = this.selectedCategoryId();
    if (categoryId === null) return '';
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : '';
  });

  constructor(private productService: ProductService) {}

  selectCategory(categoryId: number) {
    this.selectedCategoryId.set(categoryId);
  }

  onLike(productId: number) {
    this.productService.likeProduct(productId);
  }

  onDelete(productId: number) {
    this.productService.deleteProduct(productId);
  }
}