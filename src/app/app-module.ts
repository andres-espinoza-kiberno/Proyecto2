import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Nav } from './nav/nav';
import { ContainerComponent } from './Container/container.component';
import { Header } from './header/header';
import { Notification } from './notification/notification';

@NgModule({
  declarations: [
    App,
    ContainerComponent,
    Nav,
    Header,
    Notification
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
