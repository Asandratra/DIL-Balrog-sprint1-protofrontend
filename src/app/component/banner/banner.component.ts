import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {
  defaultBackground = 'gondorDefaultBanner.jpg';
  //mainBackground = 'Darksword.jpg';
  mainBackground = '';
  currentBackground = '';

  ngOnInit(): void {
    const img = new Image();
    img.src=this.mainBackground;
    img.onload = () => {
      this.currentBackground=this.mainBackground;
    };
    img.onerror = () => {
      this.currentBackground=this.defaultBackground;
    }
  }
}
