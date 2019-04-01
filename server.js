const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

app.listen(port);
console.log('Blog server listening on %j!', port);

app.use(express.static('./client/dist/final-blog'));

mongoose.connect('mongodb://bloguser:bloguser1@ds251598.mlab.com:51598/okcoders-blog-project', { useNewUrlParser: true });


const Article = mongoose.model('Article', {
	date: Date,
	title: String,
	body: String,
})

function getArticles(){
			return Article.find({}).sort({date:-1}).exec();
}

function getArticle(id){
	return Article.findById(id).exec();
}

function saveArticle(article) {
  if(!article._id) article = new Article(article);
  return Article.findByIdAndUpdate(article._id, article, {upsert:true, new:true}).exec();
};

app.get('/api/articles', (req,res) =>{
	getArticles().then(articles => {
		res.json(articles);
	});
});

app.get('/api/articles/:id', (req,res) => {
	getArticle(req.params.id).then(article => {
		res.json(article);
	})
});

app.post('/api/articles', (req,res) => {
	saveArticle(req.body).then(article => {
		res.json(article);
	});
});
