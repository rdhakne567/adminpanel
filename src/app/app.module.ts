import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModuleComponent } from './auth-module/auth-module.component';
import { PagesModuleComponent } from './pages-module/pages-module.component';
import { SharedModuleComponent } from './shared-module/shared-module.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthModuleComponent,
    PagesModuleComponent,
    SharedModuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
