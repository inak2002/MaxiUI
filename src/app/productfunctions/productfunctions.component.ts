import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productfunctions',
  templateUrl: './productfunctions.component.html',
  styleUrls: ['./productfunctions.component.css']
})
export class ProductfunctionsComponent {

  
  newProduct: any = {
    categoryId:null,
    brandId:null,
     name:'',
     specification:'',
     price:null,
    imageurl:''
  }; // Object to hold new product data

  constructor(private ps: ProductsService, private router: Router) {}

  addProduct(): void {
    this.ps.addProduct(this.newProduct).subscribe(() => {
      // Navigate back to the product list page after adding the product
      this.router.navigate(['/product']);
    });
  }
 

}
