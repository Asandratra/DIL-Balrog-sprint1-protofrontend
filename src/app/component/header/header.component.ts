import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private matDialog:MatDialog){}

  router = inject(Router);

  user = sessionStorage.getItem('currentUser')? JSON.parse(sessionStorage.getItem('currentUser')!) : null;

  openLoginPopup():void {
    this.matDialog.open(LoginComponent,{
    })
  }
  openCart():void {
    if(this.user==null) this.openLoginPopup();
    else this.router.navigateByUrl('cart');
  }
  openProfile():void {
    if(this.user==null) this.openLoginPopup();
  }

  disconnect():void {
    this.user=null;
    sessionStorage.removeItem('currentUser');
    this.router.navigateByUrl('home');
    window.location.reload();
  }
}
