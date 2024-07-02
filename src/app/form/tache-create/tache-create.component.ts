import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TachesService } from '../../Services/taches.service';

@Component({
  selector: 'app-tache-create',
  templateUrl: './tache-create.component.html',
  styleUrl: './tache-create.component.css'
})
export class TacheCreateComponent implements OnInit{

  errorState: boolean = false;
  error:string;

  errorsMessage={
    nom: "Le nom de la tâche est obligatoire",
    description: "La description de la tâche est obligatoire"
  }

  @Input() listeId: number;
  @Output() close = new EventEmitter<void>();

  tacheCreate: FormGroup;
  
  constructor(private TacheService: TachesService) {}

  ngOnInit() {
    if (!this.listeId) return;
    console.log(this.listeId);
    this.tacheCreate = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]),
      description: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]),
      listeId: new FormControl(this.listeId, Validators.required),
    });
  }
  
  OnSubmit() {
    if (this.tacheCreate.get('nom')?.invalid) {
      this.errorState = true;
      this.error=this.errorsMessage.nom;
      return;
    }
    if (this.tacheCreate.get('description')?.invalid) {
      this.errorState = true;
      this.error=this.errorsMessage.description;
      return;
    }
    
    this.TacheService.createTache(this.tacheCreate.value);
    this.close.emit();
  }

}
