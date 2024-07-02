import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetsRoutingModule } from './projets-routing.module';
import { ProjetsComponent } from './projets.component';
import { ProjetsListeComponent } from './projets-liste/projets-liste.component';
import { ProjetsCreateComponent } from './projets-create/projets-create.component';
import { ProjetsEditComponent } from './projets-edit/projets-edit.component';
import { RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { ProjetsTableComponent } from './projets-table/projets-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({

  declarations: [
    ProjetsComponent,
    ProjetsListeComponent,
    ProjetsCreateComponent,
    ProjetsEditComponent,
    ProjetsTableComponent
  ],
  imports: [
    RouterLinkActive,
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ProjetsRoutingModule,
  ]
})
export class ProjetsModule { }
