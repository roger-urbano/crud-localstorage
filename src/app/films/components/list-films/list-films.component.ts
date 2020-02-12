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
  public titleModal: string;
  public typeModal: number;

  public listFilms: Film[];
  public filmEdited: Film;
  public data: Date;

  constructor(private filmsService: FilmsService) {
    this.filmsService.getFilms();
  }

  ngOnInit() {
    this.openModalAdd = false;
    this.openModalEdit = false;
    this.listFilms = this.filmsService.getFilms();
  }


  



  isOpenModalAdd(typeModal: number, idFilm: number) {
    this.openModalAdd = true;
    this.typeModal = typeModal;
    if (this.typeModal == 1) {
      this.titleModal = 'Agregar nueva película';
    } else if (this.typeModal == 2) {
      this.titleModal = 'Editar película';

      for (let i = 0; i < this.listFilms.length; i++) {
        if (idFilm == this.listFilms[i].idFilm) {
          this.filmEdited = this.listFilms[i];
        }
      }
    }
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

  filmAdd(film: Film) {
    this.filmsService.addFilm(film);
  }

  removeFilm(idFilm: number) {
    console.log("eliminar por id")
    this.filmsService.removeFilm(idFilm);
  }

}
