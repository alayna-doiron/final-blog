import { Injectable } from '@angular/core';

const articles = [{
	_id: 1,
	date: new Date(),
	title: 'My first post!',			// title shows up on the ArticleList
	body: 'Lorem ipsum.'				// body is only for the ArticleDetail
},{
	_id: 2,
	date: new Date(),
	title: 'My second post!',
	body: 'Lorem ipsum, lorem ipsum.'
},{
	_id: 3,
	date: new Date(),
	title: 'More of my ramblings',
	body: 'Lorem ipsum.  Lorem ipsum, lorem ipsum.'
}]

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

	getArticles(){
		return Promise.resolve(articles);
	}

	getArticle(id){
		var article = articles.find(article => article._id==id);
		return Promise.resolve(article);
	}

	saveArticle(article) {
         var foundArticle = articles.find(a => a._id==article._id);
         if(foundArticle) {
             foundArticle.title = article.title;
             foundArticle.body = article.body;
             foundArticle.date = article.date;
         }
				 else {
					 article._id = articles.length+1;
					 articles.push(article);
				 }
				 return Promise.resolve(article);
     }

}
