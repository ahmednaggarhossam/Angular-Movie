import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  imgSrc:string = 'https://image.tmdb.org/t/p/w500/';
  trendingMovies:any[] =[];
  trendingTV:any[] = [];
  trendingPerson:any[] =[];
  constructor(private _MovieService:MovieService){}

  ngOnInit():void{
    this._MovieService.getTrending('movie').subscribe((response) =>{
      this.trendingMovies = response.results.slice(0,10);
    })


    this._MovieService.getTrending('tv').subscribe((response) =>{
      this.trendingTV = response.results.slice(0,10);
    })


    this._MovieService.getTrending('person').subscribe((response) =>{
      this.trendingPerson = response.results.slice(0,10);
    })
  }
}
