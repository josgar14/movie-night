import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie.model';
import { Subscription } from 'rxjs';
import { NavbarService } from 'src/app/navbar/services/navbar.service';

@Component({
	selector: 'app-movie-detail',
	templateUrl: './movie-detail.component.html',
	styleUrls: [ './movie-detail.component.css' ]
})
export class MovieDetailComponent implements OnInit, OnDestroy {
	constructor(
		private movieService: MovieService,
		private route: ActivatedRoute,
		private navbarService: NavbarService
	) {}

	id: number;
	movie: Movie;
	movieSub$: Subscription;

	ngOnInit() {
		this.id = +this.route.snapshot.paramMap.get('id');
		this.movieSub$ = this.movieService.movieFromHttp(this.id).subscribe((movie) => {
			this.movie = movie;
			this.navbarService.title.next(movie.name);
		});
	}

	ngOnDestroy(): void {
		this.movieSub$.unsubscribe();
	}
}
