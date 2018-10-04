import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';   
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do'; 
import 'rxjs/add/operator/catch'; 
import { IProduct } from './product';  

@Injectable() 
export class ProductService { 
   constructor(private _http: Http){} 
   
   getProduct(){
       [
        { "ProductID": 1, "ProductName": "Mobile", "ProductPrice":8000, "ProductQuality":"Good", "ProductCompany":"Lenovo" },
        { "ProductID": 2, "ProductName": "Laptop", "ProductPrice":32000, "ProductQuality":"Average","ProductCompany":"Hp"}
       ]
   }

//    getproducts(): Observable<IProduct[]> { 
//       return this._http.get("http://localhost:52170/api/product") 
//       .map((response: Response) => <IProduct[]> response.json()) 
//       .do(data => console.log((data))) 
//    }  
  
}