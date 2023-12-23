import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  movies: any[] = [];
  searchTerm: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadPopularMovies();
  }

  loadPopularMovies() {
    this.movieService.getPopularMovies().subscribe((data) => {
      this.movies = data.results;
      console.log(this.movies);
    });
  }

  search() {
    if (this.searchTerm.trim() !== '') {
      this.movieService.searchMovies(this.searchTerm).subscribe((data) => {
        this.movies = data.results;
      });
    } else {
      this.loadPopularMovies();
    }
  }
}
