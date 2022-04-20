import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../../services.service';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {
  formDriver=new FormGroup({
    id_card: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    second_name: new FormControl(''),
    last_name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required)
  })
  constructor(private servicesService:ServicesService) { }

  ngOnInit(): void {
  }

  new_driver(){
    var form=new FormData()
    var path='?action=create_driver';
    form.append("id_card", this.formDriver.value.id_card);    
    form.append("name", this.formDriver.value.name);    
    form.append("second_name", this.formDriver.value.second_name);    
    form.append("last_name", this.formDriver.value.last_name);    
    form.append("address", this.formDriver.value.address);    
    form.append("phone", this.formDriver.value.phone);    
    form.append("city", this.formDriver.value.city);    
    this.servicesService.consultas_post(path, form).subscribe(
      res=>{
        console.log(res);                  
          console.log(res);
          
      },
    err=>{
      console.log(err);
      }
    ) 
  }

  

}
