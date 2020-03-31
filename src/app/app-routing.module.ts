import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BusinessComponent } from './business/business.component';
import { SearchComponent } from './search/search.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'search', component: SearchComponent},
  {path: 'business/:id', component: BusinessComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
