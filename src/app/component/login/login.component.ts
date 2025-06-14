import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private matDialogRef:MatDialogRef<LoginComponent>){}

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
    this.closeLogin();
    window.location.reload();
  }
}
