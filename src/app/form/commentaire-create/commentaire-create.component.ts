import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Commentaire } from '../../../../Data_types/Projets_types';
import { CommentairesService } from '../../Services/commentaires.service';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-commentaire-create',
  templateUrl: './commentaire-create.component.html',
  styleUrl: './commentaire-create.component.css'
})
export class CommentaireCreateComponent {
  
  errorState: boolean = false;
  error: string;
  
  @Input() tacheId: number;
  
  commentaireCreateForm:FormGroup;

  formstate:boolean=false;

  constructor(private CommentairesService:CommentairesService) {}
  
  ngOnInit() {
    if (!this.tacheId) return;
    
    this.commentaireCreateForm=new FormGroup({
      contenu: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]),
      tacheId: new FormControl(this.tacheId)
    });
  
  }

  onCreate(){
    this.formstate=true;
  }

  onCancel(){
    this.formstate=false;
  }
  
  onSubmit(){
    if (this.commentaireCreateForm.get('contenu')?.invalid) {
      this.errorState = true;
      this.error = "Le contenu du commentaire est obligatoire";
      return;
    }
    this.CommentairesService.createCommentaire(this.commentaireCreateForm.value);
    this.commentaireCreateForm.reset();
    this.formstate=false;
  }

}
