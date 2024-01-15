import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './header/about/about.component';
import { HomeComponent } from './home/home.component';
import { Pro2Component } from './header/pro2/pro2.component';
import { Pro3Component } from './header/pro3/pro3.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: 'pro2', component: Pro2Component },
  { path: 'pro3', component: Pro3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
