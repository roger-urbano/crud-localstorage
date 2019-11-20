import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-edit-film',
  templateUrl: './modal-edit-film.component.html',
  styleUrls: ['./modal-edit-film.component.scss']
})
export class ModalEditFilmComponent implements OnInit {

  @Input() public openModal: boolean;
  @Output() public closeModal: EventEmitter<any> = new EventEmitter();

  public titleModal: string;

  constructor() { }

  ngOnInit() {
    this.titleModal = 'Editar Película';
  }

  isCloseModal($event) {
    this.closeModal.emit($event);
  }

}
