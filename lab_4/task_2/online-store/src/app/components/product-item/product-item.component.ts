import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  product = input.required<Product>();
  
  like = output<number>();
  delete = output<number>();

  onLike() {
    this.like.emit(this.product().id);
  }

  onDelete() {
    if (confirm('Are you sure you want to delete this product?')) {
      this.delete.emit(this.product().id);
    }
  }

  shareOnWhatsApp() {
    const text = `Check out this product: ${this.product().name} - ${this.product().link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  }

  shareOnTelegram() {
    const url = this.product().link;
    const text = this.product().name;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(telegramUrl, '_blank');
  }

  getStarsArray(): number[] {
    return [1, 2, 3, 4, 5];
  }

  getStarFillPercentage(starPosition: number): number {
    const rating = this.product().rating;
    if (starPosition <= rating) {
      return 100;
    } else if (starPosition - 1 < rating) {
      return (rating - (starPosition - 1)) * 100;
    }
    return 0;
  }
}