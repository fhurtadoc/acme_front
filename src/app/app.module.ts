import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverComponent } from './componets/driver/driver.component';
import { CarComponent } from './componets/car/car.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'




// MATERIAL 

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';  
import {MatButtonModule} from '@angular/material/button'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion'; 


// COMPONETS

import { ListCarsComponent } from './componets/car/list-cars/list-cars.component';
import { NewDriverComponent } from './componets/driver/new-driver/new-driver.component';
import { ProgressComponent } from './componets/progress/progress.component'; 
import { ProgressStepComponent } from './componets/progress/progress-step/progress-step.component'; 
import { ProgressStepDirective } from './componets/progress/progress-step.directive'; 


@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    CarComponent,    
    ListCarsComponent,
    NewDriverComponent,        
    ProgressComponent,
    ProgressStepComponent,
    ProgressStepDirective,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    HttpClientModule,
    MatTableModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
