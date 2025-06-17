import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router} from '@angular/router';
import { PopupmessageComponent } from '../popupmessage/popupmessage.component';

import { AccountService } from '../../service/account.service';
import { JwtDecoderService } from '../../decoder/jwt-decoder.service';

@Component({
  selector: 'app-login',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private accountService:AccountService, private matDialogRef:MatDialogRef<LoginComponent>, public matDialog:MatDialog){}

  router = inject(Router);
  decoder = inject(JwtDecoderService);

  loading=false;

  loginInfo = {
    username : '',
    password : ''
  }

  closeLogin():void {
    this.matDialogRef.close();
  }

  login():void {
    if(this.loginInfo.username && this.loginInfo.password){
      this.loading=true;
      this.accountService.login(this.loginInfo).subscribe({
        next:(data) => {
          const decodedToken = this.decoder.decode(data);
          const client = {
            pseudo : decodedToken.sub
          }
          sessionStorage.setItem("currentUser",JSON.stringify(client));
          this.router.navigateByUrl('home');
          window.location.reload();
          this.closeLogin();
        },
        error:(error) => {
          console.log(error);
          this.openAlert("Erreur d'identification. Veuillez vérifier le pseudo et le mot de passe ou réessayer ultérieurement.");
        }
      })
    }
    else{
      this.openAlert("Veuillez bien insérer votre pseudo et votre mot de passe.");
    }
    this.loading=false
  }

  openAlert(alertMessage:string):void {
    this.matDialog.open(PopupmessageComponent,{
      data : { message: alertMessage }
    })
  }
}
