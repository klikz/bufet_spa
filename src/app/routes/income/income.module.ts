import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { IncomeComponent } from './income.component';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {ToastModule} from 'primeng/toast';



@NgModule({
  declarations: [
    IncomeComponent
  ],
  imports: [
    CommonModule,
    IncomeRoutingModule,
    ButtonModule,
    TableModule,
    FormsModule,
    DropdownModule,
    InputNumberModule,
    ToastModule
    
  ]
})
export class IncomeModule { }
