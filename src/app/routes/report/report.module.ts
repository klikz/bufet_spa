import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    CalendarModule,
    FormsModule,
    TableModule
  ]
})
export class ReportModule { }
