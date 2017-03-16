import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import { ItemService } from './item/item.service';

import { ItemModule } from './item/item.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ItemModule,
    MaterialModule
  ],
  providers: [ ItemService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
