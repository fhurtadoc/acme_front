import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CarComponent} from './componets/car/car.component';
import {DriverComponent} from './componets/driver/driver.component';
import {AttachDriverComponent} from './componets/driver/attach-driver/attach-driver.component';
import {ListCarsComponent} from './componets/car/list-cars/list-cars.component'

const routes: Routes = [
  {
    path:'',
    redirectTo:'/list_cars',
    pathMatch:'full'
  },
  {
    path: 'list_cars',
    component:ListCarsComponent
  },
  {
    path: 'newCar',
    component:CarComponent
  },
  {
    path: 'newDriver',
    component:DriverComponent
  },
  {
    path: 'attachDriver',
    component:AttachDriverComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
