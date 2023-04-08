import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MoviesComponent } from './movies/movies.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TvComponent } from './tv/tv.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Home', component:HomeComponent, pathMatch:'full'},
  {path:'About', component:AboutComponent, pathMatch:'full'},
  {path:'Gallery', component:GalleryComponent, pathMatch:'full'},
  {path:'Movies', component:MoviesComponent, pathMatch:'full'},
  {path:'TV', component:TvComponent, pathMatch:'full'},
  {path:'Contacts', component:ContactsComponent, pathMatch:'full'},

  {path:'Login', component:LoginComponent, pathMatch:'full'},
  {path:'Register', component:RegisterComponent, pathMatch:'full'},
  {path:'', component:NotFoundComponent, pathMatch:'full'},
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
