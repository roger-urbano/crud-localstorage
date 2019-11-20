import { Component, OnInit, Input } from '@angular/core';
import { FilmsService } from '../../films.service';
import { Film } from '../../models/film';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.scss']
})
export class ListFilmsComponent implements OnInit {

  public openModalAdd: boolean;
  public openModalEdit: boolean;

  public listFilms: Film[];

  constructor(private filmsService: FilmsService) {
    this.filmsService.getListFilms();
  }

  ngOnInit() {
    this.openModalAdd = false;
    this.openModalEdit = false;
    this.listFilms = this.filmsService.getFilms();
  }


  isOpenModalAdd() {
    this.openModalAdd = true;
  }

  iscloseModalAdd($event) {
    this.openModalAdd = $event;
  }

  isOpenModalEdit() {
    this.openModalEdit = true;
  }

  iscloseModalEdit($event) {
    this.openModalEdit = $event;
  }



}
