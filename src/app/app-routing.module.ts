import { Routes } from '@angular/router';
import { ReviewSetupComponent } from './review-setup/review-setup.component';
import { DeptSetupComponent } from './dept-setup/dept-setup.component';
import { AspectSetupComponent } from './aspect-setup/aspect-setup.component';
import { AssessSetupComponent } from './assess/assess-setup.component';
import { ReportsComponent } from './reports/reports.component';
import { AboutComponent } from './about/about.component';
import { EmpSetupComponent } from './emp-setup/emp-setup.component';

export const ROUTES : Routes = [
    {
        path: 'reviewsetup',
        component: ReviewSetupComponent
    },
    {
        path: 'deptsetup',
        component: DeptSetupComponent
    },
    {
        path: 'employeesetup',
        component: EmpSetupComponent
    },
    {
        path: 'aspectsetup',
        component: AspectSetupComponent
    },
    {
        path: 'assesssetup',
        component: AssessSetupComponent
    },
    {
        path: 'reports',
        component: ReportsComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
    }
]