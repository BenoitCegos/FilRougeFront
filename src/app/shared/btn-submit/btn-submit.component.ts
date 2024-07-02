import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-submit',
  templateUrl: './btn-submit.component.html',
  styleUrl: './btn-submit.component.css'
})
export class BtnSubmitComponent {
  @Input() text: string;
  @Input() disableCondition: boolean;

}
