import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from "../dashboard/dashboard.component";
import {  } from "module";
const routes: Routes = [
  {
    path : '', component :  LoginComponent,   
  },
  { path : 'dashboard' , component : DashboardComponent ,
    children : [
        { path : '', loadChildren : ()=> import('../payment-crud/payment-crud.module').then(m => m.PaymentCrudModule) }
    ] 
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
