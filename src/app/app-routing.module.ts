import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BusinessComponent } from './business/business.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'search', component: SearchComponent},
  {path: 'business/:id', component: BusinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
