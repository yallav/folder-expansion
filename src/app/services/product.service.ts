import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
    empdata : any;
    processedEmpData: any;

    constructor(private http: HttpClient) {   }

    getEmployeeOrgData() {
        return this.http.get('../../assets/data/departement-directory.json');
    }

    filterOrgChart(orgDirectories: any){
        
        orgDirectories.forEach(function(item){
            console.log(item);
            for (var key in item) {
                if(key === 'name'){
                    if(item[key] === 'Vinay'){
                        console.log(item[key]);
                        return item;
                    } 

                }
                if(key === 'directories'){
                    if(item[key] !== undefined){
                        if(item[key] instanceof Array){
                            item[key].forEach( org => {
                                //this.filterOrgChart(org);
                           });
                        }
                    }                    
                }else if(key === 'files'){
                    console.log("Item Files");
                    if(item[key] !== undefined){
                        console.log(item[key].length);

                        item[key].forEach(fileitem =>
                            console.log("Item::"+ fileitem)                            
                        );
                        //if(item[key].length!=0) return '';
                    }    
                }                
            }
        });
    }
}