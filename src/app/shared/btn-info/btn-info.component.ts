import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-info',
  templateUrl: './btn-info.component.html',
  styleUrl: './btn-info.component.css'
})
export class BtnInfoComponent {
  @Input() text: string;
  @Output() onClickEvent = new EventEmitter<void>();

  onClick() {
    this.onClickEvent.emit();
  }
}
