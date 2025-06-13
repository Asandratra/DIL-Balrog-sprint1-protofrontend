import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private matDialogRef:MatDialogRef<LoginComponent>){}

  closeLogin():void {
    this.matDialogRef.close();
  }
}
