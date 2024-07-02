import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjetsService } from '../../Services/projets.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projets-create',
  templateUrl: './projets-create.component.html',
  styleUrl: './projets-create.component.css'
})
export class ProjetsCreateComponent implements OnInit {

  errorState: boolean = false;
  error: string;

  projet: FormGroup;

  constructor(private projetsService: ProjetsService, private router: Router) { }

  ngOnInit(): void {
    this.projet = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    });

  }

  onSubmit() {
    if (this.projet.get('nom')?.invalid) {
      this.errorState = true;
      this.error = "Le nom du projet est obligatoire";
      return;
    }

    this.projetsService.createProjet(this.projet.value);
    this.router.navigate(['/Projets']);
  }

}
