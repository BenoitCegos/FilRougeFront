import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-danger',
  templateUrl: './btn-danger.component.html',
  styleUrl: './btn-danger.component.css'
})
export class BtnDangerComponent {
  @Input() text: string;
  @Output() onClickEvent = new EventEmitter<void>();

  onClick() {
    this.onClickEvent.emit();
  }
}
