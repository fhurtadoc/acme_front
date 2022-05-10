import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../services.service';

export interface carInfo {
  license: string;
  brand: string;
  color: string;
  name: string;
  owner_name: string;
  owner_id: number;
  driver_name: string;
  driver_id: number;
}

export interface ownerInfo {
  id:string; 
  id_card :string;
  name:string;
  address:string;
  phone:string;
  city:string;
  rol:string;
}

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  displayedColumns: string[] = ['license','brand','color', 'name','owner_name','driver_name'];
  dataSource :carInfo[];
  displayedColumns_owners:string[] = ['id','id_card','name' ,'address' ,'phone' ,'city' ,'rol'];
  dataSource_owners :ownerInfo[];


  constructor(private servicesService:ServicesService) { }

  ngOnInit(): void {
    this.list_cars();
    this.list_owners();
  }

  list_cars(){
    var path='?action=list_Cars';
    this.servicesService.consultas_get(path).subscribe(
      res=>{          
          this.dataSource=res;
      },
      err=>{
        console.log(err);
      }
    )
  }

  list_owners(){
    var path='?action=list_owner';
    this.servicesService.consultas_get(path).subscribe(
      res=>{
          console.log(res);
          this.dataSource_owners=res;
      },
      err=>{
        console.log(err);
      }
    )  
  }

}
