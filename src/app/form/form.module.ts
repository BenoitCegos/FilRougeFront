import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeCreateComponent } from './liste-create/liste-create.component';
import { ListeEditComponent } from './liste-edit/liste-edit.component';
import { TacheEditComponent } from './tache-edit/tache-edit.component';
import { TacheCreateComponent } from './tache-create/tache-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormOverlayComponent } from './form-overlay/form-overlay.component';
import { CommentaireCreateComponent } from './commentaire-create/commentaire-create.component';
import { CommentaireEditComponent } from './commentaire-edit/commentaire-edit.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListeCreateComponent,
    ListeEditComponent,
    TacheEditComponent,
    TacheCreateComponent,
    FormOverlayComponent,
    CommentaireCreateComponent,
    CommentaireEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],

  exports: [
    FormOverlayComponent,
    CommentaireCreateComponent,
    CommentaireEditComponent,
  ]
})
export class FormModule { }
