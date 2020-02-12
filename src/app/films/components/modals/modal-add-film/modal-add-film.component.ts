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
  @Input() public titleModal: string;
  @Input() public typeModal: number;
  @Input() public filmEdited: Film;

  @Output() public closeModal: EventEmitter<any> = new EventEmitter();
  @Output() public filmAdd: EventEmitter<any> = new EventEmitter();
  public listFilm: Film[];
  public film: Film;
  formAddFilm: FormGroup; // Formulario Agregrar Película.
  formEditFilm: FormGroup; // Formulario Agregrar Película.
  public data: Date;


  constructor(private filmsService: FilmsService) {

    /*  inpust de Formulario */
    this.formAddFilm = new FormGroup({
      idFilm: new FormControl('', [Validators.required]),
      imgFilm: new FormControl(''),
      titleFilm: new FormControl('', [Validators.required]),
      datePublicFilm: new FormControl('', [Validators.required]),
      statusFilm: new FormControl('', [Validators.required]),
    });

    /*  inpust de Formulario */
    this.formEditFilm = new FormGroup({
      idFilm: new FormControl('', [Validators.required]),
      imgFilm: new FormControl(''),
      titleFilm: new FormControl('', [Validators.required]),
      datePublicFilm: new FormControl('', [Validators.required]),
      statusFilm: new FormControl('', [Validators.required]),
    });

  }

  ngOnInit() {
  }

  onValueChange(value: Date): void {
    this.data = value;
  }

  isCloseModal($event) {
    this.closeModal.emit($event);
    this.closeModal.emit();
  }

  addFilm() {
    if (this.formAddFilm.valid) {
      this.filmAdd.emit(this.formAddFilm.value);
    }
    this.resetForm();
  }
  
  editFilm(event) {
    event.preventDefault();
    this.film  = this.filmEdited;
    this.filmsService.editFilm(this.film);
    this.resetForm();
  }

  resetForm() {
    this.formAddFilm.reset();
   }


}
