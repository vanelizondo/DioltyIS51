import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    }, {
        path: '**',
        component: LoginComponent
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);