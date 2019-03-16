import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service'

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent  {
	article;

  constructor(private route:ActivatedRoute, private articleService:ArticleService) {
		var id = route.snapshot.paramMap.get('id');
		console.log('ArticleDetailComponent id=%o', id);
		this.articleService.getArticle(id).then(article => {
			this.article = article;
		})
	}


}
