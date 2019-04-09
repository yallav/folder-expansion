import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        RouterModule,
        GalleriaModule,
        CommonModule       
    ],
    exports: [],
    providers: []
})

export class AboutModule {

}