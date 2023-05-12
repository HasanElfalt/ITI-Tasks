import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Components/add/add.component';
import { HomeComponent } from './Components/home/home.component';
import { UpdateComponent } from './Components/update/update.component';
import { DetailComponent } from './Components/detail/detail.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"adduser", component: AddComponent},
  {path:"update/:id", component: UpdateComponent},
  {path:"details/:id", component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
