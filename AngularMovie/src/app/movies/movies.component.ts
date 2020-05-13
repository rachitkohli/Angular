import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMovie } from './movie';
import { MinLengthValidator } from '@angular/forms';
import { MovieService } from './movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

  constructor(private movieService: MovieService) { 
    // this.filterMovies = this.movies;
  }
  ngOnDestroy(): void {
    console.log("Movies component Destroyed");
  }

  ngOnInit(): void {
    console.log("Movies component Initialized");

    // this.movieService.getMovies().subscribe({
    //   next: data => {
    //     this.movies=data;
    //     this.filterMovies = this.movies;
    //   }
    // })

    this.movieService.getMovies().subscribe ( products => {
          this.movies = products;
          this.filterMovies = this.movies;      
  })
    
  }

  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(mval:string) {
    this._listFilter=mval;
    this.filterMovies = this.performFilter(this._listFilter);
  }

  pageTitle: string = "Movie List";
  imgWidth: number=80;
  imgHeight: number=100;
  showImage: boolean;
  
  filterMovies: IMovie[];
  movies: IMovie[] = [];
  // movies = this.movieService.getMovies();


  toggleImage(): void
  {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy:string) : IMovie[] {
    filterBy : filterBy.toLowerCase();
    return this.movies.filter((mvi: IMovie) => mvi.movieName.toLowerCase().includes(filterBy) ||
                                              mvi.movieGenre.toLowerCase().includes(filterBy));
    
  }

  onRatingClicked(message: string): void{
    this.pageTitle = 'Movie List ' + message;
    console.log(message);
  }
}
