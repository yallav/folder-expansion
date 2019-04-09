import { Component, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { Employee } from '../services/employee';

@Component({
    selector: 'assess-setup',
    templateUrl: './assess-setup.component.html',
    styleUrls: ['./assess-setup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AssessSetupComponent {

    index: number = -1;
    employees: Employee[];
    cols: any[];
    
    addDailogDisplay: boolean = false;
    editDailogDisplay: boolean = false;

    constructor(private employeeService: EmployeeService) {}

    ngOnInit(){

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

}