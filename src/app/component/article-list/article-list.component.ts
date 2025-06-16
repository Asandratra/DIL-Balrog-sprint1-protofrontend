import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-article-list',
  imports: [CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {
  constructor(private matDialog: MatDialog, private articleService: ArticleService){}
  
  user = sessionStorage.getItem('currentUser')? JSON.parse(sessionStorage.getItem('currentUser')!) : null;
  
  articles: any[] = [];

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articleService.getArticles().subscribe(data=> this.articles=data.content);
  }
  openLoginPopup():void {
    this.matDialog.open(LoginComponent,{
    })
  }
}
