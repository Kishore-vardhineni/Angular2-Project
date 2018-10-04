import { Component, OnInit } from '@angular/core';
import { Inventory } from '../inventory/inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
name:string="Inventory Page";
Inventory:any[];
  constructor() { 
    this.Inventory=[
      {InventoryId:101,InventoryName:"Subbu",InventoryService:"Electrician",InventoryAddress:"Madhapur"},     
      {InventoryId:102,InventoryName:"Punna",InventoryService:"Education",InventoryAddress:"YusufGuda"},
      {InventoryId:103,InventoryName:"Madhavi",InventoryService:"Sales",InventoryAddress:"Kukatpally"}
    ]
  }
  myImage='../assets/Beach.jpeg';

  
  addFunction(first:string,second:string){
    debugger;
    var first1=parseInt(first);
    var second1=parseInt(second);
    var add=first1+second1;
     alert(add)
  }
  public fname:string="kishore";
  public lname:string="vardhi";
  ngOnInit() {
    
  }

}
