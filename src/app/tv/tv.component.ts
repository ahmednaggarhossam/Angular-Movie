import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {

  imgSrc:string = 'https://image.tmdb.org/t/p/w500/';
  trendingMovies:any[] =[];

  constructor(private _MovieService:MovieService){}

  ngOnInit():void{
    this._MovieService.getTrending('tv').subscribe((response) =>{
      this.trendingMovies = response.results;
    })
  }
}
