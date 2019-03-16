import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http:HttpClient) {

	}

	getArticles(){
		return this.http.get('/api/articles').toPromise();
	}

	getArticle(id){
		return this.http.get('/api/article/'+id).toPromise();
	}

	saveArticle(article) {
		return this.http.post('/api/article', article).toPromise();
}
}
