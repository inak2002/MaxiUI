import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: any[] = [];
 
 
  constructor(private ps:ProductsService,private router:Router) {}

  ngOnInit(): void {
    this.ps.getProducts().subscribe((data) => {
      this.products = data;

       // Check if data is an array or not
    // if (Array.isArray(data)) {
    //   this.products = data;
    // } else {
    //   console.error('Unexpected data format:', data);
    //   this.products = [];
    // }
    });
  }
 

}
