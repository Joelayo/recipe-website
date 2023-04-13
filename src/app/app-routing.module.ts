import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { RecipeComponent } from './pages/recipe/recipe.component';

const routes: Routes = [
{path: 'contact', component: ContactComponent},
{path: 'home', component: HomeComponent},
{path: 'blog', component: BlogComponent},
{path: 'recipe', component: RecipeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
