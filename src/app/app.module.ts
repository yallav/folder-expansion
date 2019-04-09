import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './app-routing.module';
import { ReviewSetupModule } from './review-setup/review-setup.module';
import { ReviewPageSetupControllerService } from './services/review-setup-controller.service';
import { DeptSetupModule } from './dept-setup/dept-setup.module';
import { AspectSetupModule } from './aspect-setup/aspect-setup.module';
import { AssessSetupModule } from './assess/assess-setup.module';
import { ReportsModule } from './reports/reports.module';
import { AboutModule } from './about/about.module';
import { EmpSetupMoudle } from './emp-setup/emp-setup.module';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    ReviewSetupModule,
    DeptSetupModule,
    AspectSetupModule,
    AssessSetupModule,
    ReportsModule,
    AboutModule,
    EmpSetupMoudle
  ],
  providers: [ 
    ReviewPageSetupControllerService,
    ProductService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
