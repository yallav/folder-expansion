import { NgModule } from '@angular/core';
import { DeptSetupComponent } from './dept-setup.component';
import { DataTableModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/dialog';

@NgModule({
    declarations: [DeptSetupComponent],
    imports : [
        DataTableModule,
        DialogModule
    ],
    exports: [],
    providers: []
})

export class DeptSetupModule{

}