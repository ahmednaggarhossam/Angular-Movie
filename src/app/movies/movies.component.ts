import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  imgSrc:string = 'https://image.tmdb.org/t/p/w500/';
  trendingMovies:any[] =[];
  constructor(private _MovieService:MovieService){}
  
  ngOnInit():void{
    this._MovieService.getTrending('movie').subscribe((response) =>{
      this.trendingMovies = response.results;
    })
  }
}
