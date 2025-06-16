import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-popupmessage',
  imports: [MatDialogModule],
  templateUrl: './popupmessage.component.html',
  styleUrl: './popupmessage.component.css'
})
export class PopupmessageComponent {
  constructor(public dialogRef: MatDialogRef<PopupmessageComponent>,@Inject(MAT_DIALOG_DATA) public data:{message:string}){}

  onClose():void {
    this.dialogRef.close();
  }
}
