import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Nav } from './nav/nav';
import { ContainerComponent } from './Container/container.component';
import { Header } from './header/header';
import { Notification } from './notification/notification';
import { Search } from './search/search';
import { FormsModule } from '@angular/forms';
import { Products } from './products/products';
@NgModule({
  declarations: [
    App,
    ContainerComponent,
    Nav,
    Header,
    Notification,
    Search,
    Products
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
