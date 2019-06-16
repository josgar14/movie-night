import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { AddMovieComponent } from '../add-movie/add-movie.component';

const routes: Routes = [
	{
		path: '',
		component: MovieListComponent
	},
	{
		path: 'add',
		component: AddMovieComponent
	},
	{
		path: ':id',
		component: MovieDetailComponent
	}
];

@NgModule({
	declarations: [],
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class MovieRoutingModule {}
