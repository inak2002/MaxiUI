import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  categories: any[]=[];
  brands: any[]=[];
  postData: any = {
    categoryId: null,
    brandId: null,
    name: '',
    specification: '',
    price: null,
    imageurl: ''
  };

  constructor(private http: HttpClient,private ps:ProductsService,private router:Router) { }

  ngOnInit(): void {
    this.fetchCategories();
    this.fetchBrands();
  }

  fetchCategories() {

   this.http.get<any>('https://localhost:44335/api/v1/Category').subscribe(response => {
      this.categories = response.result;
      console.log('Categories:', this.categories)
    });
  }

  fetchBrands() {
    this.http.get<any>('https://localhost:44335/api/v1/Brand').subscribe(response => {
      this.brands = response.result;
      console.log('brands:', this.brands)
    });
  }

  submit() {
    // Send POST request with this.postData to your API
    this.ps.addProduct(this.postData).subscribe(response=>{
      console.log(response.result)
      this.router.navigate(['product'])
     });
    // console.log(this.postData);
    }

    
  }

