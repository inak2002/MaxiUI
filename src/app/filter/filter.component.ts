import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  constructor(private ps:ProductsService,private router:Router){}
  
  filteredProducts:any=[]

  f: any = {
    categoryId:1,
    brandId:4
  }
  submitSearch(){
    // debugger
     this.ps.filterProduct(this.f.categoryId,this.f.brandId).subscribe(res=>{
      this.filteredProducts=res.result
       this.router.navigate(['filter'])
     })
 }
 
 }
