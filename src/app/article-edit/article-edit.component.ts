import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
    selector: 'app-article-edit',
    templateUrl: './article-edit.component.html',
    styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent {
    article;

    constructor(private route:ActivatedRoute, private router:Router, private articleService:ArticleService) {
        var id = route.snapshot.paramMap.get('id');
        console.log('ArticleEditComponent id=%o', id);
				if(id==='new') {
	            // If id is 'new', we're creating a new article
	            this.article = {
	                date: new Date(),
	                title: 'My next awesome article'
	            };
	        } else {
	            // Else try loading it from articleService
	            this.articleService.getArticle(id).then(article => {
	                this.article = article;
	            });
	        }

    }

    parseDate(str) {
        return new Date(str);
    }

    save() {
        this.articleService.saveArticle(this.article).then(article => {
					this.router.navigate(['/articles']);
				});
    }
}
