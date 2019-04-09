import { Component } from '@angular/core';

@Component({
    selector: 'reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.css']
})

export class ReportsComponent {
    pdata: any;
    barchartdata: any;
    linechartdata: any;
    options: any;

    constructor() {
        this.pdata = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    "#FF6384",
                    "#4BC0C0",
                    "#FFCE56",
                    "#E7E9ED",
                    "#36A2EB"
                ],
                label: 'My dataset'
            }],
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May"
            ]
        };

        this.barchartdata = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                },
                {
                    label: 'My Third dataset',
                    backgroundColor: '#FF6384',
                    borderColor: '#FF6384',
                    data: [12, 56, 17, 19, 21, 95, 67]
                }
            ]
        };

        this.linechartdata = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: '#42A5F5',
                    borderColor: '#42A5F5'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: '#9CCC65',
                    borderColor: '#9CCC65'
                },
                {
                    label: 'Third Dataset',
                    data: [2, 34, 89, 19,56, 27, 32],
                    fill: false,
                    backgroundColor: '#FF6384',
                    borderColor: '#FF6384'
                }
            ]
        };

        this.options = {
            title: {
                display: true,
                text: 'Chart',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
    }
}