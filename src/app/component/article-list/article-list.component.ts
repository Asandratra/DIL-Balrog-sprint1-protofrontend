import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-article-list',
  imports: [CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {
  constructor(private articleService: ArticleService){}
  
  articles: any[] = [];

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articleService.getArticles().subscribe(data=> this.articles=data);
  }
}
