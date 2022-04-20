import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../services.service';

@Component({
  selector: 'app-attach-driver',
  templateUrl: './attach-driver.component.html',
  styleUrls: ['./attach-driver.component.css']
})
export class AttachDriverComponent implements OnInit {

  constructor(private servicesService:ServicesService) { }

  listcarsOutdriver=[];
  listdriverOutcar=[];
  
  id_user;
  id_car;

  ngOnInit(): void {

    this.list_carsOutdriver()
    this.list_driverOutcar()

  }

  list_carsOutdriver(){
    var path='?action=carsoutDriver'
    this.servicesService.consultas_get(path).subscribe(
      res=>{
        this.listcarsOutdriver=res
        console.log(this.listcarsOutdriver);
        
      },
      err=>{
        console.log(err);
      }
    )
  }
  
  list_driverOutcar(){
    var path='?action=list_drivers_outcars'
    this.servicesService.consultas_get(path).subscribe(
      res=>{
        this.listdriverOutcar=res
      },
      err=>{
        console.log(err);
      }
    )

  }

  createAsoc(){
    var formasig=new FormData()
    formasig.append('id_user', this.id_user);
    formasig.append('id_car', this.id_car);
    var path='?action=assign_car'
    this.servicesService.consultas_post(path, formasig).subscribe(
      res=>{
        console.log(res);        
      },
      err=>{
        console.log(err);
      }
    )
  }


  

}
