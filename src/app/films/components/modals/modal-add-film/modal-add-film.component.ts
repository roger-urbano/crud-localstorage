import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from 'src/app/films/models/film';
import { FilmsService } from 'src/app/films/films.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-add-film',
  templateUrl: './modal-add-film.component.html',
  styleUrls: ['./modal-add-film.component.scss']
})
export class ModalAddFilmComponent implements OnInit {

  @Input() public openModal: boolean;
  @Output() public closeModal: EventEmitter<any> = new EventEmitter();
  @Output() public filmAdd: EventEmitter<any> = new EventEmitter();
  listFilm: Film[];
  formAddFilm: FormGroup; // Formulario Agregrar Película.

  public titleModal: string;

  constructor(private filmsService: FilmsService) {

    /*  inpust de Formulario */
    this.formAddFilm = new FormGroup({
      idFilm: new FormControl('', [Validators.required]),
      imgFilm: new FormControl('', [Validators.required]),
      titleFilm: new FormControl('', [Validators.required]),
      datePublicFilm: new FormControl('', [Validators.required]),
      statusFilm: new FormControl('', [Validators.required]),
    });

  }

  ngOnInit() {
    this.titleModal = 'Agregar nueva película';
  }

  isCloseModal($event) {
    this.closeModal.emit($event);
    this.closeModal.emit();
  }

  addFilm(event) {
    this.filmAdd.emit(this.formAddFilm.value);
    console.log(this.formAddFilm.value);

    // if (this.formAddFilm.valid) {
    //   this.filmsService.addFilm(this.formAddFilm.value);
    // }
  }

}
