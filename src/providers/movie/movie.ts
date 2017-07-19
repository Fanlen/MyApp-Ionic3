import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MovieProvider {
  
  //private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }
  
  getLatestMovies(){
    return this.http.get(/*this.baseApiPath +*/ "https://api.themoviedb.org/3/movie/popular?api_key=5c13f0edf30a565890331889657e8e80");
  }
}  



