import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router} from '@angular/router';
import { PopupmessageComponent } from '../popupmessage/popupmessage.component';

@Component({
  selector: 'app-login',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private matDialogRef:MatDialogRef<LoginComponent>, public matDialog:MatDialog){}

  router = inject(Router);

  closeLogin():void {
    this.matDialogRef.close();
  }

  login():void {
    var user: any = {
      pseudo: 'Gelano',
      motdepasse: 'etjlerendraipa',
      nom: 'Bilbon',
      prenom: 'Sake'
    }
    sessionStorage.setItem("currentUser",JSON.stringify(user));
    this.router.navigateByUrl('home');
    window.location.reload();
    this.closeLogin();
    this.openAlert("Erreur d'identification. Vérifiez bien le pseudo et le mot de passe ou essayez ultérieurement.");
  }

  openAlert(alertMessage:string):void {
    this.matDialog.open(PopupmessageComponent,{
      data : { message: alertMessage }
    })
  }
}
