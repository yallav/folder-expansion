import { NgModule } from '@angular/core';

import { ChartModule } from 'primeng/chart';
import { ReportsComponent } from './reports.component';

@NgModule({
    declarations: [
        ReportsComponent
    ],
    imports: [ 
        ChartModule
    ],
    exports: [
        ReportsComponent
    ],
    providers: []
})

export class ReportsModule {

}