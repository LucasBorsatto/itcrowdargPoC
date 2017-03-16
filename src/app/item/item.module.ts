import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { ItemComponent } from './item.component';
import { ItemService } from './item.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    ItemComponent
  ],
  providers: [
    ItemService
  ],
  declarations: [ ItemComponent ]
})
export class ItemModule { }



