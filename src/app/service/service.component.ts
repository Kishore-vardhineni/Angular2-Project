import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
 
  name1:string="Service Page";

 constructor(){
 }
  ngOnInit() {
  }
}
