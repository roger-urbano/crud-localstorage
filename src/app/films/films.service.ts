import { Injectable } from '@angular/core';
import { Film } from './models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  listFilms: Film[];

  constructor() {
    this.listFilms = [];

    this.listFilms = [
      {id: 1, title: 'Vengadores', datepublic: '17-12-20', status: 'Cartelera' },
      {id: 2, title: 'Wason', datepublic: '17-12-20', status: 'Estreno' },
      {id: 3, title: 'Infiltrados', datepublic: '17-12-20', status: 'Cartelera' },
      {id: 4, title: 'Dumbo', datepublic: '17-12-20', status: 'Fuera de cartelera' },
      {id: 5, title: 'Spiderman', datepublic: '17-12-20', status: 'Estreno' },
    ];

  }

  getListFilms() {
    localStorage.setItem('listFilms', JSON.stringify(this.listFilms));
  }

  getFilms() {
    if(localStorage.getItem('listFilms') === null ) {
      this.listFilms = [];
    } else {
      this.listFilms = JSON.parse(localStorage.getItem('listFilms'));
    }
    return this.listFilms;
  }

  addFilms(film: Film): void {
    this.listFilms.unshift(film);
    let listFilms;

    if(localStorage.getItem('listFilms') === null) {
      listFilms = [];
      listFilms.unshift(film);
      localStorage.setItem('listFilms', JSON.stringify(film));
    } else {
        listFilms = JSON.parse(localStorage.getItem('listFilms'));
        listFilms.unshift(film);
        localStorage.setItem('listFilms', JSON.stringify(film));
    }
  }
}
