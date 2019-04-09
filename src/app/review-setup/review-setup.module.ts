import { NgModule } from '@angular/core';
import { ReviewSetupComponent } from './review-setup.component';
import { DataTableModule, CalendarModule } from 'primeng/primeng';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ 
        ReviewSetupComponent
    ],
    imports: [
        DataTableModule,
        CalendarModule,
        CommonModule
    ],
    exports: [ ReviewSetupComponent ],
    providers: []
})

export class ReviewSetupModule{

}