const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(8000);
console.log('Blog server listening');

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

function getArticles(){
	return Promise.resolve(articles);
}

function getArticle(id){
	var article = articles.find(article => article._id==id);
	return Promise.resolve(article);
}

function saveArticle(article) {
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

app.get('/api/articles', (req,res) =>{
	getArticles().then(articles => {
		res.json(articles);
	});
});

app.get('/api/article/:id', (req,res) =>{
	getArticle(req.params.id).then(articles => {
		res.json(articles);
	});
});

app.post('/api/article', (req,res) =>{
	saveArticle(req.body).then(article => {
		res.json(article);
	});
});
