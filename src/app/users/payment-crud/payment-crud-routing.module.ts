import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from '../payment-crud/edit/edit.component';
import { ViewComponent } from '../payment-crud/view/view.component';
const routes: Routes = [
  {path : "view" ,  component : ViewComponent },
  {path : "edit" ,  component : EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentCrudRoutingModule { }
