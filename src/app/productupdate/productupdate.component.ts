import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.css']
})
export class ProductupdateComponent {
  newProduct: any = {
    id:null,
    categoryId:null,
    brandId:null,
     name:'',
     specification:'',
     price:null,
    imageurl:''
  };
  id:any;
  constructor(private ps: ProductsService, private router: Router) {}

  EditProduct(): void {
    this.ps.editProduct(this.newProduct).subscribe(() => {
      // Navigate back to the product list page after adding the product
      this.router.navigate(['/product']);
    });
  }

  RemoveProduct(){
    this.ps.deleteProduct(this.id).subscribe(() => {
      // Navigate back to the product list page after adding the product
      alert('product removed')
      this.router.navigate(['/product']);
    });
  }
}
