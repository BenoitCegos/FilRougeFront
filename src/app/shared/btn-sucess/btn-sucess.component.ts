import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-sucess',
  templateUrl: './btn-sucess.component.html',
  styleUrl: './btn-sucess.component.css'
})
export class BtnSucessComponent {
  @Input() text: string;
  @Input() type: string | 'button';
  @Output() onClickEvent = new EventEmitter<void>();

  onClick() {
    this.onClickEvent.emit();
  }
}
