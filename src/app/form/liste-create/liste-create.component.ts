import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListesService } from '../../Services/listes.service';

@Component({
  selector: 'app-liste-create',
  templateUrl: './liste-create.component.html',
  styleUrl: './liste-create.component.css'
})
export class ListeCreateComponent implements OnInit {

  errorState: boolean = false;
  error: string;

  listeform: FormGroup;

  @Input() projetId: number;
  @Output() close = new EventEmitter<void>();

  constructor(private ListesService: ListesService) { }

  ngOnInit() {
    if (!this.projetId) return;
    console.log(this.projetId);
    this.listeform = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]),
      projetId: new FormControl(this.projetId)
    });
  }

  OnSubmit() {
    if (this.listeform.get('nom')?.invalid) {
      this.errorState = true;
      this.error = "Le nom de la liste est obligatoire";
      return;
    }
    this.ListesService.createListe(this.listeform.value);
    this.close.emit();
  }

}
