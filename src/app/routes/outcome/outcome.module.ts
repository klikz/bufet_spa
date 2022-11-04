import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutcomeRoutingModule } from './outcome-routing.module';
import { OutcomeComponent } from './outcome.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputNumberModule} from 'primeng/inputnumber';


@NgModule({
  declarations: [
    OutcomeComponent
  ],
  imports: [
    CommonModule,
    OutcomeRoutingModule,
    DropdownModule,
    FormsModule,
    ToastModule,
    ButtonModule,
    TableModule,
    InputNumberModule
  ]
})
export class OutcomeModule { }
