import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ToastModule} from './toast/toast.module';
import { LoginComponent } from './login/login.component';

import {AppRoutes} from './app.routes';
import { EmployeesComponent } from './employees/employees.component';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeesComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    ToastModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
