import { Component, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Directory } from './directory-model';

@Component({
    selector: 'tree-view',
    templateUrl: './tree-view.html',
    styleUrls: ['./tree-view.css']
})
export class TreeViewComponent {

    @Input() directories: Array<Directory> = [];
    @Output() valueChange = new EventEmitter<any>();

    ngOnInit(){

    }

    valueChanged(data: any){
        this.valueChange.emit(data);
        //console.log(data);
    }
}
