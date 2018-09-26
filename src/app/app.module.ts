import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule, MatCardModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'awesome-seo'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
