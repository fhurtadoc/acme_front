import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../services.service';

export interface carInfo {
  license: string;
  brand: string;
  name: string;
  owner_name: string;
  owner_id: number;
  driver_name: string;
  driver_id: number;
}


@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  displayedColumns: string[] = ['license','brand','name','owner_name','owner_id','driver_name','driver_id'];
  dataSource :carInfo[];


  constructor(private servicesService:ServicesService) { }

  ngOnInit(): void {
    this.list_cars();
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

}
