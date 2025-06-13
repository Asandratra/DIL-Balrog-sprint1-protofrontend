import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private matDialog:MatDialog){}

  user = null;

  openLoginPopup():void {
    this.matDialog.open(LoginComponent,{
    })
  }
}
