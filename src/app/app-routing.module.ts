import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { RecipeComponent } from './pages/recipe/recipe.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
<<<<<<< HEAD
{path: 'contact', component: ContactComponent},
{path: 'home', component: HomeComponent},
{path: 'blog', component: BlogComponent},
{path: 'recipe', component: RecipeComponent}
=======
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'recipe', component: RecipeComponent}

>>>>>>> af6a479c44c3c773980b9f2eaedc76e43bcf3c34
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
