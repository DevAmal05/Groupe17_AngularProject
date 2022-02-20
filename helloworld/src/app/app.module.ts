import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from 'primeng/button';
import {PanelMenuModule} from 'primeng/panelmenu';

import {MenuModule} from 'primeng/menu';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    MenuModule,
   
    AppRoutingModule,
    ButtonModule,
    PanelMenuModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
