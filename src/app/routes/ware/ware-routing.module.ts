import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WareComponent } from './ware.component';

const routes: Routes = [{ path: '', component: WareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WareRoutingModule { }
