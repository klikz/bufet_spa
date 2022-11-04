import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'income', loadChildren: () => import('./routes/income/income.module').then(m => m.IncomeModule) }, { path: 'outcome', loadChildren: () => import('./routes/outcome/outcome.module').then(m => m.OutcomeModule) }, { path: 'products', loadChildren: () => import('./routes/products/products.module').then(m => m.ProductsModule) }, { path: 'persons', loadChildren: () => import('./routes/persons/persons.module').then(m => m.PersonsModule) }, { path: 'ware', loadChildren: () => import('./routes/ware/ware.module').then(m => m.WareModule) }, { path: 'report', loadChildren: () => import('./routes/report/report.module').then(m => m.ReportModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
