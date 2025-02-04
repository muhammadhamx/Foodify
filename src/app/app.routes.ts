import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FloorsComponent } from './floors/floors.component';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { MenuComponent } from './menu/menu.component';
import { CateringComponent } from './catering/catering.component';
import { SalesComponent } from './sales/sales.component';
import { SettingsComponent } from './settings/settings.component';
import { TimelineComponent } from './timeline/timeline.component';

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
    },
    {
        path:'employees/employee-detail',
        component:EmployeeDetailComponent
    },
    {
        path:'menu',
        component:MenuComponent
    },
    {
        path:'catering',
        component:CateringComponent
    },
    {
        path:'sales',
        component:SalesComponent
    },
    {
        path:'settings',
        component:SettingsComponent
    },
    {
        path:'set-profile',
        component:TimelineComponent
    },
];
