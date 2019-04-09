import { NgModule } from '@angular/core';
import { AspectSetupComponent } from './aspect-setup.component';
import { AccordionModule } from 'primeng/accordion';
import { MessageService } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CarService } from './carservice';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ AspectSetupComponent ],
    imports: [ AccordionModule,
            DataTableModule,
            DialogModule,
            HttpClientModule,
            TableModule,
            FormsModule,
            CommonModule ],
    exports: [ AspectSetupComponent ],
    providers: [ MessageService,
                CarService
            ]
})

export class AspectSetupModule {

}