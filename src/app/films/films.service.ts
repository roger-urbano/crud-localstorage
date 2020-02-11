import { Injectable } from '@angular/core';
import { Film } from './models/film';
import { filter } from 'minimatch';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  listFilms: Film[];

  constructor() {
    this.listFilms = [];

  }


  getFilms(): Film[] {
    if (localStorage.getItem('listFilms') === null) {
      this.listFilms = [
        { idFilm: 1, imgFilm: '../../../../assets/images/poster-vengadores.jpg',titleFilm: 'Vengadores', datePublicFilm: '17-12-20', statusFilm: 'Cartelera' },
        { idFilm: 2, imgFilm: '../../../../assets/images/poster-joker.jpg', titleFilm: 'Wason', datePublicFilm: '17-12-20', statusFilm: 'Estreno' },
        { idFilm: 3, imgFilm: '../../../../assets/images/poster-dumbo.jpg', titleFilm: 'Dumbo', datePublicFilm: '17-12-20', statusFilm: 'Fuera de cartelera' },
        { idFilm: 4, imgFilm: '../../../../assets/images/poster-spiderman.jpg', titleFilm: 'Spiderman', datePublicFilm: '17-12-20', statusFilm: 'Estreno' },
      ];

      // Convertir a objeto el string de localstorage.
      localStorage.setItem('listFilms', JSON.stringify(this.listFilms));

    } else {
      // Convertir string del localstorage a Objetos
      this.listFilms = JSON.parse(localStorage.getItem('listFilms'));
    }
    return this.listFilms;
  }

  addFilm(film: Film): void {
    this.listFilms.push(film);
    let films;
    localStorage.setItem('listFilms', JSON.stringify(this.listFilms));

    if (localStorage.getItem('films') === null) {
      films = [];
      films.push(film);
      localStorage.setItem('films', JSON.stringify(films));
    } else {
      films = JSON.parse(localStorage.getItem('films'));
      films.push(film);
      localStorage.setItem('films', JSON.stringify(films));
    }
  }

  removeFilm(idFilm: number) {
    let id = idFilm;
    // Eliminar film por id.
    for (let i = 0; i < this.listFilms.length; i++) {
      if (id == this.listFilms[i].idFilm) {
        this.listFilms.splice(i, 1);
      }
    }
    localStorage.setItem('listFilm', JSON.stringify(this.listFilms));
  }
}
