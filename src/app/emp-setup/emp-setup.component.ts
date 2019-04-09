import { Component, ViewEncapsulation } from '@angular/core';
import { Directory } from './directory-model';
import { ProductService } from '../services/product.service';

declare var $: any;

@Component({
    selector: 'employee-setup',
    templateUrl: './emp-setup.component.html',
    styleUrls: ['./emp-setup.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class EmpSetupComponent {
    directories: Array<Directory> = [];
    eligibleEmployees: Array<String> = [];

    disableSaveAndResetBtnFlag: boolean= true;
    dialogTitle: string = '';
    dialogContent: string = '';
    showDialogFlag: boolean = false;

    filteredObj : any;

    constructor(private service : ProductService) {

    }

    ngOnInit(){
         this.service.getEmployeeOrgData().subscribe( empdata =>{
            this.directories = Array.of(this.loopThroughTheEntries(empdata));            
        });

        $(document).ready(function() {
            
            $('#resizing_select').change(function(){
              $("#width_tmp_option").html($('#resizing_select option:selected').text()); 
              $(this).width($("#width_tmp_select").width());  
            });
        });
    }

    filterOrgEvent(){
        this.filterOrg(this.directories,'Ron');

        if(this.filteredObj !== undefined){
            this.directories = Array.of(this.filteredObj);
        }
    }

    filterOrg(org: any, orgName: any){
        org.forEach((item) => {
            for(var key in item){
                if((key === 'name') || (key === 'files')){
                    if(item[key].toString().toLowerCase().trim() === orgName.trim().toLowerCase()){
                        this.filteredObj = item;
                    }
                }

                if((key === 'directories')){
                    if(item[key] !== undefined){
                        this.filterOrg(item[key],orgName);
                    }
                }
            }
        });
    }

    loopThroughTheEntries(empdata: any){
        let directory = new Directory('',[],[]);
 
        Object.keys(empdata).map(e => {
            let name = e;
            let value = empdata[e];
            let files = [];
            this.eligibleEmployees.push(name);
            value.map(entry => {
                if(entry instanceof Object){
                    directory.directories.push(this.loopThroughTheEntries(entry));
                }
                else{                
                    files.push(entry);
                    this.eligibleEmployees.push(entry);
                }
            });

            directory.name = name;
            directory.files = files;
        });
        return(directory);
    }
    
    updateDialogControl(childdata: any){
        this.disableSaveAndResetBtnFlag = false;
        let thistemp = this;

        this.updateEligibleEmployees(childdata,thistemp);
    }

    updateEligibleEmployees(empData: any,tempinstance){

        for(var key in empData){

            if(empData[key] instanceof Object){
                this.updateEligibleEmployees(empData[key],tempinstance);
            }

            if(key === 'files'){
                if(empData['checked']){                    
                    if(tempinstance.eligibleEmployees.indexOf(empData['name']) !== -1){
                        tempinstance.eligibleEmployees.splice(
                            tempinstance.eligibleEmployees.indexOf(empData['name']),1);
                    }  

                    if(empData.hasOwnProperty('files')){
                        for(var idx in empData['files']){
                            if(tempinstance.eligibleEmployees.indexOf(empData['files'][idx]) !== -1){
                                tempinstance.eligibleEmployees.splice(
                                    tempinstance.eligibleEmployees.indexOf(empData['files'][idx]),1);
                            }
                        }
                    }
                }

                if(!empData['checked']){
                    tempinstance.eligibleEmployees.push(empData['name']);
                    if(empData.hasOwnProperty('files')){
                        for(var idx in empData['files']){
                            tempinstance.eligibleEmployees.push(empData['files'][idx]);
                        }                             
                    }
                }
            }

            $('input:checkbox').each(function () {
                if(this.checked === false){
                    var sThisVal = (this.checked ? "" : $(this).val());
                    tempinstance.eligibleEmployees.push(sThisVal);
                }else if(this.checked === true){
                    var sThisVal = (this.checked ? $(this).val() : "");
                    if(tempinstance.eligibleEmployees.indexOf(sThisVal) !== -1){
                        tempinstance.eligibleEmployees.splice(
                            tempinstance.eligibleEmployees.indexOf(sThisVal),1);
                    }
                }
            });
        }
    }

    showSaveDialog(){
        this.dialogTitle = 'Save Changes';
        this.dialogContent = "You made changes to Organization. Do you want to Save changes?"
        this.showDialogFlag = true;
    }

    showResetDialog(){
        this.dialogTitle = 'Reset Changes';
        this.dialogContent = "You made changes to Organization. Do you want to discard changes?"
        this.showDialogFlag = true;
    }

    selectedEmployees(){
        console.log("Following employees are elegible for assessment");
        console.log($.unique(this.eligibleEmployees));
    }
}