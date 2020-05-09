import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  //ngFor directive
  cardIDs = [
  {"value": "one"},
  {"value": "two"},
  {"value": "three"},
  ];

  ngOnInit() {
      this.weatherSearchForm = this.formBuilder.group({
        location: ['']
      });
  }

}
