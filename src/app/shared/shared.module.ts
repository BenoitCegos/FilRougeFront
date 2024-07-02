import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BtnInfoComponent } from './btn-info/btn-info.component';
import { BtnDangerComponent } from './btn-danger/btn-danger.component';
import { BtnSucessComponent } from './btn-sucess/btn-sucess.component';
import { BtnCloseComponent } from './btn-close/btn-close.component';
import { BtnSubmitComponent } from './btn-submit/btn-submit.component';



@NgModule({
  declarations: [
    BtnInfoComponent,
    BtnDangerComponent,
    BtnSucessComponent,
    BtnCloseComponent,
    BtnSubmitComponent
  ],
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  exports: [
    BtnInfoComponent,
    BtnDangerComponent,
    BtnSucessComponent,
    BtnCloseComponent,
    BtnSubmitComponent
  ]


})
export class SharedModule { }
