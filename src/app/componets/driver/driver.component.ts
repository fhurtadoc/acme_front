import { Component, OnInit } from '@angular/core';
import {ServicesService}  from '../../services.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {  
  constructor(public servicesService:ServicesService) { }
  dataSource = [];
  displayedColumns: string[] = [
  "id",
  "name",
  "second_name",
  "last_name",
  "address",
  "city",
  "id_card",
  "phone",
  "rol"
  ];  

  ngOnInit(): void {
    this.listDrivers();
  }

  listDrivers(){
    var path='?action=list_drivers'
    this.servicesService.consultas_get(path).subscribe(
      res=>{
        this.dataSource=res
      },
      err=>{
        console.log(err);
      }
    )
  }

}
