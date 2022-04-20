import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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
  constructor() { }

  ngOnInit(): void {
  }

  new_driver(){
    
  }

  

}
