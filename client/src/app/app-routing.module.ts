import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';


const routes: Routes = [
	{path:'home', component:HomeComponent},
	{path:'about', component:AboutComponent},
	{path:'articles', component:ArticleListComponent},
	{path:'articles/:id', component:ArticleDetailComponent},
	{path:'articles/:id/edit', component:ArticleEditComponent},
	{path:'articles/new/edit', component:ArticleEditComponent},
	{path:'', component:HomeComponent},
  {path:'**', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
