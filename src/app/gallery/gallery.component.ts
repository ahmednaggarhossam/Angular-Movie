import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  imgSrc:string = 'https://image.tmdb.org/t/p/w500/';
  trendingPerson:any[] =[];
  trendingMovie:any[] =[];
  trendingTv:any[] =[];
  constructor(private _MovieService:MovieService){}

  ngOnInit():void{
    this._MovieService.getTrending('person').subscribe((response) =>{
      this.trendingPerson = response.results.slice(0,10);
    })
    this._MovieService.getTrending('movie').subscribe((response) =>{
      this.trendingMovie = response.results.slice(0,10);
    })
    this._MovieService.getTrending('tv').subscribe((response) =>{
      this.trendingTv = response.results.slice(0,10);
    })
  }

}
