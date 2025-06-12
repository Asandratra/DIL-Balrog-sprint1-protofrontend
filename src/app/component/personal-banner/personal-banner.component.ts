import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-personal-banner',
  imports: [CommonModule, FormsModule],
  templateUrl: './personal-banner.component.html',
  styleUrl: './personal-banner.component.css'
})
export class PersonalBannerComponent implements OnInit {
  constructor(private articleService: ArticleService) {}

  user : any = {
    nom : 'Rakoto',
    prenom : 'Mitia'
  }

  restant = 12;
  quantity = 1;

  dailyArticle : any;

  defaultBackground = 'gondorDefaultBanner.jpg';
  //mainBackground = 'Darksword.jpg';
  mainBackground = '';
  currentBackground = '';

  ngOnInit(): void {
    this.loadDailyArticle();
  }

  loadDailyArticle(): void {
    this.articleService.getDailyArticle().subscribe(data=>{
      this.dailyArticle=data;
      if(data.dailyImage){
        this.mainBackground=data.dailyImage;
      }

      const img = new Image();
      img.src=this.mainBackground;
      img.onload = () => {
        this.currentBackground=this.mainBackground;
      };
      img.onerror = () => {
        this.currentBackground=this.defaultBackground;
      }
    });
  }

  addToQuantity(toAdd:number): void{
    if(this.quantity+toAdd>=1 && this.quantity+toAdd<=this.restant){
      this.quantity += toAdd
    }
  }

}
