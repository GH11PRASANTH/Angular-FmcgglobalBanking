import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { ProductAlterComponent } from './product-alter/product-alter.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ,
    RouterModule.forRoot([
      {path:'', component:ProductListComponent}
    ]) 
  ],
  declarations: [ AppComponent, HelloComponent ,ProductListComponent,TopBarComponent,ProductAlterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
