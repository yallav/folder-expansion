import { Component, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { EmployeeService } from '../services/employee-service';
import { Employee } from '../services/employee';

@Component({
    selector: 'aspect-setup',
    templateUrl: './aspect-setup.component.html',
    styleUrls: ['./aspect-setup.component.css'] ,
    encapsulation: ViewEncapsulation.None
})

export class AspectSetupComponent {

    index: number = -1;
    transactions: any;
    employees: Employee[];
    cols: any[];
    
    addDailogDisplay: boolean = false;
    editDailogDisplay: boolean = false;

    constructor(private messageService: MessageService, private employeeService: EmployeeService) {}

    ngOnInit(){
        this.transactions = [
            {
                item: 'Tool1',
                usedby: 24,
                updatedby: 'Meenakshi',
                updatedon: new Date(2017, 10, 10, 13, 10, 15)
            },
            {
                item: 'Tool2',
                usedby: 20,
                updatedby: 'Craig Greenhill',
                updatedon: new Date(2017, 10, 10, 13, 10, 15)
            },
            {
                item: 'Tool3',
                usedby: 14,
                updatedby: 'Vijay Yalla',
                updatedon: new Date(2017, 10, 10, 13, 10, 15)
            }
          ];

          this.employeeService.getCarsSmall().then(employees => this.employees = employees);

          this.cols = [
            { field: 'name', header: 'Employee' },
            { field: 'title', header: 'Title' },
            { field: 'skills', header: 'Skills' },
            { field: 'aspects', header: 'Aspects' }
        ];
    }

    showAddDeptDialog() {
        this.addDailogDisplay = true;
    }

    showEditDeptDailog(data: any){
        this.editDailogDisplay = true;
    }
/*     onTabClose(event) {
        this.messageService.add({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index})
    }
    
    onTabOpen(event) {
        this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }
    
    openNext() {
        this.index = (this.index === 3) ? 0 : this.index + 1;
    }
    
    openPrev() {
        this.index = (this.index <= 0) ? 3 : this.index - 1;
    } */
}