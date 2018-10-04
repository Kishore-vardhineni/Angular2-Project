import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  product:any=[];
 name:string="Welcome To ProductPage";

  constructor(private _productService:ProductService) {}

  ngOnInit() {
      // this._productService.getproducts()
      //  .subscribe((ProductData) => this.products = ProductData);
      
    this.product= this._productService.getProduct();
    }
}