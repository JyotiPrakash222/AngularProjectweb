import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './header/about/about.component';
import { Pro2Component } from './header/pro2/pro2.component';
import { Pro3Component } from './header/pro3/pro3.component';
import { Pro4Component } from './header/pro4/pro4.component';
import { Pro5Component } from './header/pro5/pro5.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DatabaseService } from 'src/database.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    AboutComponent,
    Pro2Component,
    Pro3Component,
    Pro4Component,
    Pro5Component,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientInMemoryWebApiModule.forRoot(DatabaseService),
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
