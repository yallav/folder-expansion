import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'dept-setup',
    templateUrl: './dept-setup.component.html',
    styleUrls: ['./dept-setup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class DeptSetupComponent { 
    transactions: any;
    addDailogDisplay: boolean = false;
    editDailogDisplay: boolean = false;

    ngOnInit(){
        this.transactions = [
            {
                dept: 'IT',
                dhead: 'Meenkashi Singh',
                ohead: 'Meenkashi Singh',
                status: 'Eligible'
            },
            {
                dept: 'Applications',
                dhead: 'Samuel',
                ohead: 'Meenakshi Singh',
                status: 'Eligible'
            },
            {
                dept: 'Engineering Applications',
                dhead: 'Nadar',
                ohead: 'Alex',
                status: 'Eligible'
            },
            {
                dept: 'Technology',
                dhead: 'Srikanth Kesav',
                ohead: 'Srisanth',
                status: 'Eligible'
            },
            {
                dept: 'Program Management',
                dhead: 'Vivek Oberoi',
                ohead: 'Srisanth',
                status: 'Eligible'
            },
        ];
    }

    showAddDeptDialog() {
        this.addDailogDisplay = true;
    }

    showEditDeptDailog(data: any){
        this.editDailogDisplay = true;
    }
}