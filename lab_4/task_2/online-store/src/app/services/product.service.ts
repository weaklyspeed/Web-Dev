import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categoriesSignal = signal<Category[]>([
    {
      id: 1,
      name: 'Smartphones',
      icon: '📱',
      description: 'Latest flagship smartphones with cutting-edge technology'
    },
    {
      id: 2,
      name: 'Laptops',
      icon: '💻',
      description: 'Powerful laptops for work, gaming, and creativity'
    },
    {
      id: 3,
      name: 'Headphones',
      icon: '🎧',
      description: 'Premium audio experience with noise cancellation'
    },
    {
      id: 4,
      name: 'Tablets',
      icon: '📟',
      description: 'Versatile tablets for entertainment and productivity'
    }
  ]);

  private productsSignal = signal<Product[]>([
    // Smartphones (categoryId: 1)
    {
      id: 1,
      name: 'Apple iPhone 15 Pro Max',
      description: 'Флагманский смартфон Apple с титановым корпусом, A17 Pro чипом и инновационной системой камер. Дисплей Super Retina XDR 6.7" с ProMotion.',
      price: 649990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h03/83559848214558.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/h5c/83559848247326.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113708420/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Премиум смартфон Samsung с S Pen, 200MP камерой и Snapdragon 8 Gen 3. Титан корпус и Dynamic AMOLED 2X дисплей 6.8".',
      price: 549990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/84963284254750.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/84963284254750.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h23/h0f/84963284287518.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h78/84963284320286.png'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Xiaomi 14 Ultra',
      description: 'Профессиональный смартфон с камерой Leica, Snapdragon 8 Gen 3 и 2K AMOLED дисплеем 6.73".',
      price: 499990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/hb2/84963287924766.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/hb2/84963287924766.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h03/84963287957534.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/h5c/84963287990302.png'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-16-gb-512-gb-chernyi-116043723/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Google Pixel 8 Pro',
      description: 'Смартфон Google с чипом Tensor G3, AI-камерой и чистым Android. 6.7" Super Actua дисплей.',
      price: 449990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/h07/84963289743390.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/h07/84963289743390.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h03/84963289776158.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/h5c/84963289808926.png'
      ],
      link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-128-gb-chernyi-116043633/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'OnePlus 12',
      description: 'Флагман OnePlus с Snapdragon 8 Gen 3, 100W зарядкой и Hasselblad камерой. 6.82" ProXDR дисплей.',
      price: 399990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7d/h1a/84963291054110.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7d/h1a/84963291054110.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h03/84963291086878.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/h5c/84963291119646.png'
      ],
      link: 'https://kaspi.kz/shop/p/oneplus-12-16-gb-512-gb-zelenyi-116043845/',
      likes: 0,
      categoryId: 1
    },
    // Laptops (categoryId: 2)
    {
      id: 6,
      name: 'MacBook Pro 14" M3',
      description: 'Профессиональный ноутбук Apple с чипом M3 Pro, 18GB памяти и 512GB SSD. Liquid Retina XDR дисплей, до 18 часов работы.',
      price: 1149990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/hb6/84963289104414.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h24/hb6/84963289104414.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/h52/84963289137182.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h77/h01/84963289169950.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-3-mrkp3-seryi-116043663/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'ASUS ROG Zephyrus G14',
      description: 'Игровой ноутбук с AMD Ryzen 9, NVIDIA RTX 4060 и 14" QHD дисплеем 165Hz. 16GB RAM, 1TB SSD.',
      price: 899990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc3/h5f/84963294412830.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc3/h5f/84963294412830.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/h52/84963294445598.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h77/h01/84963294478366.png'
      ],
      link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-ga403-grey-116043712/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'Dell XPS 15',
      description: 'Премиум ноутбук с Intel Core i9, 32GB RAM, NVIDIA RTX 4050 и 15.6" OLED дисплеем 3.5K.',
      price: 1049990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h7c/84963295330334.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h76/h7c/84963295330334.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/h52/84963295363102.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h77/h01/84963295395870.png'
      ],
      link: 'https://kaspi.kz/shop/p/dell-xps-15-9530-serebristyi-116043898/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'Lenovo Legion 5 Pro',
      description: 'Игровой ноутбук с AMD Ryzen 7, NVIDIA RTX 4060, 16" WQXGA дисплеем 240Hz. 16GB RAM, 512GB SSD.',
      price: 749990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h15/hc6/84963296575518.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h15/hc6/84963296575518.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/h52/84963296608286.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h77/h01/84963296641054.png'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-legion-5-pro-16arx8-seryi-116043789/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'HP Spectre x360',
      description: 'Трансформер с Intel Core i7, 16GB RAM, 1TB SSD и 13.5" OLED сенсорным дисплеем 3K2K.',
      price: 849990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6d/h45/84963297771550.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h45/84963297771550.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/h52/84963297804318.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h77/h01/84963297837086.png'
      ],
      link: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-eu-serebristyi-116043901/',
      likes: 0,
      categoryId: 2
    },
    // Headphones (categoryId: 3)
    {
      id: 11,
      name: 'Bose QuietComfort Ultra',
      description: 'Беспроводные наушники с активным шумоподавлением и технологией Immersive Audio. До 24 часов работы на одном заряде.',
      price: 159990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/h8a/84963171860510.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h42/h8a/84963171860510.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h49/84963171893278.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/h06/84963171926046.png'
      ],
      link: 'https://kaspi.kz/shop/p/bose-quietcomfort-ultra-chernyi-116063566/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Sony WH-1000XM5',
      description: 'Флагманские наушники Sony с лучшим шумоподавлением, 30 часами работы и быстрой зарядкой.',
      price: 139990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdf/h75/84963299082270.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdf/h75/84963299082270.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h49/84963299115038.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/h06/84963299147806.png'
      ],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-116043567/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'Apple AirPods Max',
      description: 'Премиум наушники Apple с адаптивным эквалайзером, активным шумоподавлением и пространственным аудио.',
      price: 299990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7d/h2b/84963300474910.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7d/h2b/84963300474910.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h49/84963300507678.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/h06/84963300540446.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-116043912/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Sennheiser Momentum 4',
      description: 'Беспроводные наушники с исключительным звуком, адаптивным шумоподавлением и 60 часами работы.',
      price: 129990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/hc3/84963301802014.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/hc3/84963301802014.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h49/84963301834782.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/h06/84963301867550.png'
      ],
      link: 'https://kaspi.kz/shop/p/sennheiser-momentum-4-chernyi-116043734/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'JBL Tour One M2',
      description: 'Премиум наушники JBL с пространственным звуком, адаптивным шумоподавлением и 50 часами работы.',
      price: 89990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h61/hd7/84963303129118.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h61/hd7/84963303129118.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h49/84963303161886.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/h06/84963303194654.png'
      ],
      link: 'https://kaspi.kz/shop/p/jbl-tour-one-m2-chernyi-116043889/',
      likes: 0,
      categoryId: 3
    },
    // Tablets (categoryId: 4)
    {
      id: 16,
      name: 'iPad Pro 12.9" M2',
      description: 'Планшет Apple с чипом M2, дисплеем Liquid Retina XDR 12.9" и поддержкой Apple Pencil 2го поколения. 128GB памяти.',
      price: 649990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/hf4/84963292381150.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/hf4/84963292381150.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h92/h21/84963292413918.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h2e/h95/84963292446686.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-128gb-wi-fi-seryi-105892158/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Samsung Galaxy Tab S9 Ultra',
      description: 'Премиум планшет Samsung с 14.6" Dynamic AMOLED 2X дисплеем, S Pen в комплекте и Snapdragon 8 Gen 2.',
      price: 549990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5d/hdd/84963304456222.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5d/hdd/84963304456222.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h92/h21/84963304488990.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h2e/h95/84963304521758.png'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-ultra-seryi-116043899/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Xiaomi Pad 6',
      description: 'Мощный планшет с 11" дисплеем 144Hz, Snapdragon 870 и 8840mAh батареей. Идеален для работы и развлечений.',
      price: 159990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/h71/84963305783326.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/h71/84963305783326.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h92/h21/84963305816094.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h2e/h95/84963305848862.png'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-8-gb-256-gb-seryi-116043745/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'iPad Air 5',
      description: 'Планшет Apple с чипом M1, 10.9" Liquid Retina дисплеем и поддержкой Apple Pencil 2го поколения. 64GB.',
      price: 349990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3c/h81/84963307110430.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3c/h81/84963307110430.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h92/h21/84963307143198.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h2e/h95/84963307175966.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-5-wi-fi-64gb-seryi-116043822/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Lenovo Tab P12 Pro',
      description: 'Премиум планшет с 12.6" AMOLED дисплеем, Snapdragon 870 и стилусом в комплекте. 8GB RAM, 256GB.',
      price: 299990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3e/h51/84963308437534.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3e/h51/84963308437534.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h92/h21/84963308470302.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h2e/h95/84963308503070.png'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-tab-p12-pro-seryi-116043779/',
      likes: 0,
      categoryId: 4
    }
  ]);

  getCategories() {
    return this.categoriesSignal.asReadonly();
  }

  getProducts() {
    return this.productsSignal.asReadonly();
  }

  getProductsByCategory(categoryId: number) {
    return this.productsSignal().filter(product => product.categoryId === categoryId);
  }

  likeProduct(productId: number) {
    this.productsSignal.update(products =>
      products.map(product =>
        product.id === productId
          ? { ...product, likes: product.likes + 1 }
          : product
      )
    );
  }

  deleteProduct(productId: number) {
    this.productsSignal.update(products =>
      products.filter(product => product.id !== productId)
    );
  }
}