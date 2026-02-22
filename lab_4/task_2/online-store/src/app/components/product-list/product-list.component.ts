import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = input<Product[]>([]);
  categoryName = input<string>('');
  
  like = output<number>();
  delete = output<number>();

  onLike(productId: number) {
    this.like.emit(productId);
  }

  onDelete(productId: number) {
    this.delete.emit(productId);
  }
}