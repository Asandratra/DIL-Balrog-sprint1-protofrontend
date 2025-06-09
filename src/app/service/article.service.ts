import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = `${environment.apiurl}/article`;

  constructor(private http: HttpClient) { }
  
  getDailyArticle(): Observable<any> {
    return this.http.get(`${this.apiUrl}/daily`);
  }
  getArticles(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
