import { Injectable } from "@angular/core";
import { IMovie } from './movie';
import { HttpClient  } from "@angular/common/http"
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable ({
    providedIn: 'root'
})

export class MovieService {
    private movieUrl = 'api/movies/movies.json';
    constructor(private http: HttpClient) {  }
    
    getMovies(): Observable<IMovie[]> {
         return this.http.get<IMovie[]>(this.movieUrl);
        // return this.http.get<IMovie[]>(this.movieUrl).pipe(
        //     tap(data=>console.log('All: ' + JSON.stringify(data))));
    }
    
}