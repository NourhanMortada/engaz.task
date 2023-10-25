import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DuplicatesComponent } from './components/duplicates/duplicates.component';

const routes: Routes = [
  {path:"",  component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"viewDublicate/:id", component:DuplicatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
