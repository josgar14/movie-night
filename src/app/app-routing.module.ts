import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'movies',
		pathMatch: 'full'
	},
	{
		path: 'movies',
		loadChildren: () => import('./movie/movie.module').then((m) => m.MovieModule)
	}
];

@NgModule({
	declarations: [],
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
