import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilmsService } from '../../films.service';
import { Film } from '../../models/film';

@Component({
  selector: 'app-modal-add-film',
  templateUrl: './modal-add-film.component.html',
  styleUrls: ['./modal-add-film.component.scss']
})
export class ModalAddFilmComponent implements OnInit {

  @Input() public openModal: boolean;
  @Output() public closeModal: EventEmitter<any> = new EventEmitter();

  public titleModal: string;

  constructor() { }

  ngOnInit() {
    this.titleModal = 'Agregar nueva película';
  }

  isCloseModal($event) {
    this.closeModal.emit($event);
  }

}
