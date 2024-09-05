import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FloorsComponent } from './floors/floors.component';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { EmployeesComponent } from './employees/employees.component';

export const routes: Routes = [
    {
        path:'',
        component:AuthComponent
    },
    {
        path:'floors',
        component:FloorsComponent
    },
    {
        path:'floors/table-detail',
        component:TableDetailComponent
    },
    {
        path:'employees',
        component:EmployeesComponent
    }
];
