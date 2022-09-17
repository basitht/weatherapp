import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor (private weatherService: WeatherService){ //injecting service to constructor

  }

  cityName: string = 'Delhi';
  weatherData?: WeatherData;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    // this.weatherService.getWeatherData('Delhi')
    // .subscribe({
    //   next: (Response) => {
    //     this.weatherData = Response;
    //     console.log(Response);
    //   }
    // })
    this.getWeatherData(this.cityName);
  }
  // title = 'weatherappproject';
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (Response) => {
        this.weatherData = Response;
        console.log(Response);
      }
    });
  }
}
