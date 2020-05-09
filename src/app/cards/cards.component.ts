import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OwmapiService } from "../owmapi.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public weatherSearchForm: FormGroup; 
  public weatherData: any;
  responseStatus: any;
  icon: number;

  @Input('cardID') cardID: any;

  constructor(
      private formBuilder: FormBuilder,
      private owmapiService: OwmapiService
  ) { }

  ngOnInit() {
      this.weatherSearchForm = this.formBuilder.group({
        location: ['']
      });
}
  
  async sendToAPI(formValues) {
    try{
    	this.responseStatus = 404;
    	await this.owmapiService.getWeather(formValues.location).then(data => {
		this.weatherData = data.body;
		this.responseStatus = data.status;
		});
	this.icon = this.weatherData.weather[0].id;
	if (this.icon < 300) {
	  this.weatherData.image = "assets/thunder.png";
	  };  
	if (this.icon >= 300 && this.icon < 400){
	  this.weatherData.image = "assets/drizzle.png";
	  }; 
	if (this.icon >= 500 && this.icon < 600){
	  this.weatherData.image = "assets/rain.png"; 
	  };
	if (this.icon >= 600 && this.icon < 700){
	  this.weatherData.image = "assets/snow.png"; 
	  };
	if (this.icon >= 700 && this.icon < 800){
	  this.weatherData.image = "assets/cloudy.png"; 
	  };
	if (this.icon >= 800){
	  this.weatherData.image = "assets/sunny.png"; 
	  };
	}
	
    finally{
        if (this.responseStatus >= 400 && this.responseStatus < 500) {
	   this.weatherData = {
	     "name": "City not found. Make sure the city name is correct and try again...",
             "image": "assets/error.png",     
	     "weather": [
	     {"main": "", "description": "",},
	     ],
	     }
    	};	
    }
  }
}
