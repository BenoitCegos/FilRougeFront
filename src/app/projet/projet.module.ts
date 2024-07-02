import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetRoutingModule } from './projet-routing.module';
import { ProjetComponent } from './projet.component';
import { ListeComponent } from './listes/liste.component';
import { TacheComponent } from './taches/tache.component';
import { ReactiveFormsModule, Form } from '@angular/forms';
import { ProjetActionsBoardComponent } from './projet-actions-board/projet-actions-board.component';
import { FormModule } from '../form/form.module';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { TacheModalComponent } from './tache-modal/tache-modal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProjetComponent,
    ListeComponent,
    TacheComponent,
    ProjetActionsBoardComponent,
    CommentaireComponent,
    TacheModalComponent,
  ],
  imports: [
    CommonModule,
    ProjetRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormModule,
  ],
})
export class ProjetModule { }
