import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {
  constructor(private articleService: ArticleService) {}

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
}
