import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientsComponent } from './clients/clients.component';
import { EmployeesComponent } from './employees/employees.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    }, {
        path: '',
        component: ClientsComponent
    }, {
        path: '',
        component: EmployeesComponent
    },
    {
        path: '**',
        component: LoginComponent
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
