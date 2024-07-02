import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-close',
  templateUrl: './btn-close.component.html',
  styleUrl: './btn-close.component.css'
})
export class BtnCloseComponent {

  @Output() onClickEvent = new EventEmitter<void>();

  onClick() {
    this.onClickEvent.emit();
  }
} 
