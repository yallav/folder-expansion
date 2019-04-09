import { NgModule } from '@angular/core';

import { EmpSetupComponent } from './emp-setup.component';
import { CommonModule } from '@angular/common';
import { TreeViewComponent } from './tree-view.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
    declarations: [
        EmpSetupComponent,
        TreeViewComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        DialogModule,
        CheckboxModule
    ],
    exports: [],
    providers: []
})

export class EmpSetupMoudle {

}