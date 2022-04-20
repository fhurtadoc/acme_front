import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {  

  public URL=environment.siteUrl

  constructor(private http: HttpClient, private router: Router ) { }

  consultas_post(ruta:String, object:any ){  
    console.log(object);       
    return this.http.post<any>(this.URL + ruta, object); 
  }

  consultas_get(ruta:String ){
    return this.http.get<any>(this.URL + ruta); 
  }

  consultas_getParams(ruta:String, params:String){
    return this.http.get<any>(this.URL + ruta +params); 
  }
  
}
