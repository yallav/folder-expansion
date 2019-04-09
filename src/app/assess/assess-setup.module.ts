import { NgModule } from '@angular/core';
import { AssessSetupComponent } from './assess-setup.component';
import { AccordionModule } from 'primeng/accordion';
import { MessageService } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee-service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ AssessSetupComponent ],
    imports: [ AccordionModule,
            DataTableModule,
            DialogModule,
            HttpClientModule,
            TableModule,
            FormsModule,
            CommonModule ],
    exports: [ AssessSetupComponent ],
    providers: [ MessageService,
        EmployeeService
            ]
})

export class AssessSetupModule {

}