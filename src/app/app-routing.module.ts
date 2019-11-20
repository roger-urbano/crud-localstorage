import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFilmsComponent } from './films/components/list-films/list-films.component';
import { ViewListFilmComponent } from './films/views/view-list-film/view-list-film.component';


const routes: Routes = [
  { path: '', redirectTo: '/lista-peliculas', pathMatch: 'full' },
  { path: 'lista-peliculas', component: ViewListFilmComponent,
    children: [
      // { path: 'detail', component: HeroDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
