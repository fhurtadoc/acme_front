import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../services.service';
import {MatAccordion} from '@angular/material/expansion';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  id_Owner;
  id_driver=0;
  listdriverOutcar=[];

  formOwner=new FormGroup({
    id_card: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    second_name: new FormControl(''),
    last_name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
  })

  formCar=new FormGroup({
    license:new FormControl('', Validators.required),
    brand:new FormControl('', Validators.required),
    type_car:new FormControl('', Validators.required),    
    color:new FormControl('', Validators.required)    
    
  })

  constructor(private servicesService:ServicesService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.list_driverOutcar();
  }

  CrearVehiculo(){
    this.createOwner();
    
  }

  createOwner(){
    var path='?action=create_owner';
    var form=new FormData()
    form.append("id_card", this.formOwner.value.id_card);    
    form.append("name", this.formOwner.value.name);    
    form.append("second_name", this.formOwner.value.second_name);    
    form.append("last_name", this.formOwner.value.last_name);    
    form.append("address", this.formOwner.value.address);    
    form.append("phone", this.formOwner.value.phone);    
    form.append("city", this.formOwner.value.city);    
    this.servicesService.consultas_post(path, form).subscribe(
      res=>{
          console.log(res);          
          if(res.http===200){                        
            this.create_car(res.id);
          }
      },
      err=>{
        console.log(err);
      }
    )
  }

  create_car(id){
    if(id!=0){
      var formOwner=new FormData()
      formOwner.append("license", this.formCar.value.license);    
      formOwner.append("brand", this.formCar.value.brand);    
      formOwner.append("type_car", this.formCar.value.type_car);    
      formOwner.append("color", this.formCar.value.color);          
      formOwner.append("owner", id);          
      var path='?action=create_car';      
      this.servicesService.consultas_post(path, formOwner).subscribe(
        res=>{
          console.log(res);
          var id_car=res.id
          var id_user=this.id_driver
          this.asocDriver(id_car, id_user);
        },
        err=>{
          console.log(err);
        }
      )
    }
  }

  asocDriver(id_car, id_user){
    console.log(id_car, id_user );
    var path='?action=assign_car';
    var asingcarForm=new FormData();
    asingcarForm.append('id_car', id_car);
    asingcarForm.append('id_user',id_user );
    this.servicesService.consultas_post(path, asingcarForm ).subscribe(
      res=>{
        if(res){
          let link = ['/'];
          this.router.navigate(link);
        }
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
}
