import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Employee } from './employee';

@Injectable()
export class EmployeeService {

    constructor(private http: HttpClient) { }

    getCarsSmall() {
    return this.http.get<any>('assets/data/employee.json')
      .toPromise()
      .then(res => <Employee[]>res.data)
      .then(data => { return data; });
    }
}