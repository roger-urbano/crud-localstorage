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
        { idFilm: 1, imgFilm: '../../../../assets/images/poster-vengadores.jpg', titleFilm: 'Vengadores', datePublicFilm: '17-12-20', statusFilm: 'En cartelera' },
        { idFilm: 2, imgFilm: '../../../../assets/images/poster-joker.jpg', titleFilm: 'Wason', datePublicFilm: '17-12-20', statusFilm: 'En estreno' },
        { idFilm: 3, imgFilm: '../../../../assets/images/poster-dumbo.jpg', titleFilm: 'Dumbo', datePublicFilm: '17-12-20', statusFilm: 'Fuera de cartelera' },
        { idFilm: 4, imgFilm: '../../../../assets/images/poster-spiderman.jpg', titleFilm: 'Spiderman', datePublicFilm: '17-12-20', statusFilm: 'En estreno' },
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
    this.listFilms.unshift(film);
    let films;
    localStorage.setItem('listFilms', JSON.stringify(this.listFilms));

    if (localStorage.getItem('films') === null) {
      films = [];
      films.unshift(film);
      localStorage.setItem('films', JSON.stringify(films));
    } else {
      films = JSON.parse(localStorage.getItem('films'));
      films.unshift(film);
      localStorage.setItem('films', JSON.stringify(films));
    }
  }

  removeFilm(idFilm: number): void {
    let id = idFilm;
    // Eliminar film por id.
    for (let i = 0; i < this.listFilms.length; i++) {
      if (id == this.listFilms[i].idFilm) {
        this.listFilms.splice(i, 1);
        localStorage.setItem('listFilms', JSON.stringify(this.listFilms));
      }
    }
  }

  editFilm(film: Film): void {
    let filmEdited = film;
    for (let i = 0; i < this.listFilms.length; i++) {
      if (filmEdited.idFilm == this.listFilms[i].idFilm) {
        this.listFilms[i] = filmEdited;
        localStorage.setItem('listFilms', JSON.stringify(this.listFilms));
      }
    }
  }

}
