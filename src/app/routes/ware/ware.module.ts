import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WareRoutingModule } from './ware-routing.module';
import { WareComponent } from './ware.component';


@NgModule({
  declarations: [
    WareComponent
  ],
  imports: [
    CommonModule,
    WareRoutingModule
  ]
})
export class WareModule { }
