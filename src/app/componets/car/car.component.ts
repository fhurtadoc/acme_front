import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  id_Owner;

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
    type_car:new FormControl('', Validators.required)    
    
  })

  constructor(private servicesService:ServicesService) { }

  ngOnInit(): void {
  }

  CrearVehiculo(){
    this.createOwner();
    if(this.id_Owner!='0'){
      var formOwner=new FormData()
      formOwner.append("license", this.formCar.value.license);    
      formOwner.append("brand", this.formCar.value.brand);    
      formOwner.append("type_car", this.formCar.value.type_car);    
      formOwner.append("owner", this.id_Owner);          
      var path='?action=create_car';      
      this.servicesService.consultas_post(path, formOwner).subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      )
    }
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
            this.id_Owner=res.id;
            console.log(this.id_Owner);            
          }
      },
      err=>{
        console.log(err);
      }
    )
  }
}
