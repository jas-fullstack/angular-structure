import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentCrudRoutingModule } from './payment-crud-routing.module';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    PaymentCrudRoutingModule
  ]
})
export class PaymentCrudModule { }
