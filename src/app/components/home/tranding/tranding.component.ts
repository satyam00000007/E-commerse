import { Component } from '@angular/core';

@Component({
  selector: 'app-tranding',
  templateUrl: './tranding.component.html',
  styleUrls: ['./tranding.component.scss']
})
export class TrandingComponent {

  
  products :any = [
    {
      "id": 1,
      "name": "Wooden container Bowl",
      "description": "Handcrafted wooden bowl for decorative and practical use.",
      "price": 96.00,
      "old_price": 120.00,
      "image_url": "https://example.com/images/wooden-container-bowl.jpg",
      "stock": 10,
      "category": "Home & Kitchen"
    },
    {
      "id": 2,
      "name": "Euvira Rocking Chair",
      "description": "Comfortable and stylish rocking chair made from durable materials.",
      "price": 90.00,
      "old_price": 110.00,
      "image_url": "https://example.com/images/euvira-rocking-chair.jpg",
      "stock": 5,
      "category": "Furniture"
    },
    {
      "id": 3,
      "name": "Set of 2 baskets",
      "description": "Two woven baskets in different sizes for storage or display.",
      "price": 230.00,
      "old_price": 250.00,
      "image_url": "https://example.com/images/set-of-2-baskets.jpg",
      "stock": 8,
      "category": "Home & Kitchen"
    },
    {
      "id": 4,
      "name": "Tailored Fit Mesh-Panel",
      "description": "Breathable and stylish tailored-fit shirt with mesh panels.",
      "price": 80.00,
      "old_price": 100.00,
      "image_url": "https://example.com/images/tailored-fit-mesh-panel.jpg",
      "stock": 15,
      "category": "Clothing"
    }
  ]
  
}
