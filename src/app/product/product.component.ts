import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: any[] = [];

  constructor(private ps: ProductsService) {}

  ngOnInit(): void {
    this.ps.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
