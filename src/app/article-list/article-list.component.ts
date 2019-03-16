import { Component } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent  {
articles = [];

	constructor(private articleService:ArticleService) {
		articleService.getArticles().then(articles => {
			this.articles = articles;
	});
}


}
