import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultComponent} from "./layouts/default/default.component";
import {HomepageComponent} from "./modules/homepage/homepage.component";
import {DatabasePageComponent} from "./modules/database-page/database-page.component";
import {AddnamePageComponent} from "./modules/addname-page/addname-page.component";
import {DashComponent} from "./modules/dash/dash.component";

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: 'homepage', component: HomepageComponent },
      { path: 'database', component: DatabasePageComponent},
      { path: 'adddata', component: AddnamePageComponent},
      { path: 'dashboard', component: DashComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
