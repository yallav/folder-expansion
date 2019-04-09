import { Component, ViewEncapsulation  } from '@angular/core';
import { ReviewPageSetupControllerService } from '../services/review-setup-controller.service';

@Component({
    selector: 'review-setup',
    templateUrl: './review-setup.component.html',
    styleUrls: ['./review-setup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ReviewSetupComponent{
    transactions: any;
    depts: any;

    constructor(private reviewpagecontroller : ReviewPageSetupControllerService){
      
    }

    ngOnInit(){
        this.transactions = [
            {
              sdate: new Date(2015, 1, 10, 13, 10, 15),
              edate: new Date(2015, 10, 10, 13, 10, 15),
              status: 'Completed',
              name: 'ReviewPeriod_201501-201510',
              editedby: 'Samuel',
              editedon: new Date(2015, 9, 10, 1, 17, 10)
            },
            {
              sdate: new Date(2015, 1, 10, 13, 10, 15),
              edate: new Date(2015, 10, 10, 13, 10, 15),
              status: 'Completed',
              name: 'ReviewPeriod_201501-201510',
              editedby: 'Craig',
              editedon: new Date(2015, 9, 10, 1, 17, 10)
            },
            {
              sdate: new Date(2015, 1, 10, 13, 10, 15),
              edate: new Date(2015, 10, 10, 13, 10, 15),
              status: 'Completed',
              name: 'ReviewPeriod_201501-201510',
              editedby: 'Scott',
              editedon: new Date(2015, 9, 10, 1, 17, 10)
            }
          ];

          this.depts = [
            {
              eligible: 'PD- | CPU- | RTL- | STA- | PV- | PDN-',
              ineligible: 'IT+ | FACILITIES+ | LEGAL+ | PAYROLL+ | COMPLIANCE+ | HR+'
            }
          ]
    }

    showReviewPeriodBottomPage(){
      this.reviewpagecontroller.showBottomPage = true;
    }

    saveReviewPeriodBottomPage(){
      this.reviewpagecontroller.showBottomPage = false;
    }
}
