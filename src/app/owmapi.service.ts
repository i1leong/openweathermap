import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwmapiService {
  public json: any;
  public responseStatus: number;
  public handleError: any;

  constructor(private http: HttpClient) { }
  getWeather(location){
     return this.http.get(
     "https://api.openweathermap.org/data/2.5/weather?APPID=dd6509a19cf4e760d5fed20654f856ff&q=" + location,
     {observe: 'response'}
     ).toPromise();

  }
}

