import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {trigger, style, transition, animate, state} from '@angular/animations';

@Component({
  selector: 'app-modal-default',
  templateUrl: './modal-default.component.html',
  styleUrls: ['./modal-default.component.scss'],
  animations: [
    trigger('starModal', [
        state('void', style({
            transform: 'translateY(100px)',
            opacity: 0
        })),
        transition(':enter', [
            animate('300ms cubic-bezier(0.35, 0, 0.25, 1)', style({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ]),
        transition(':leave',
          animate('300ms cubic-bezier(0.35, 0, 0.25, 1)', style({
              transform: 'translateY(100px)',
              opacity: 0
          })))
    ]),
    trigger('starOverlay', [
        state('void', style({
            opacity: 0
        })),
        transition(':enter', [
            animate('400ms cubic-bezier(0.35, 0, 0.25, 1)', style({
                opacity: 1
            }))
        ]),
        transition(':leave',
            animate('400ms cubic-bezier(0.35, 0, 0.25, 1)', style({
                opacity: 0
            })))
    ])
]
})
export class ModalDefaultComponent implements OnInit {

  @Input() openModal: boolean;
  @Input() titleModal: string;
  @Output() public closeModal: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Emitiendo el evento booleano false
  isCloseModal($event) {
    this.closeModal.emit($event);
  }

}
