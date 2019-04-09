export class Directory{
    name: string;
    directories: any;
    files: any;
    expanded:boolean;
    checked:boolean;

    constructor(name,directories,files) {
        this.name = name;
        this.files = files;
        this.directories = directories;
        this.expanded = false;
        this.checked = false;
    }

    toggle(){
        this.expanded = !this.expanded;
    }

    check(){
        let newState = !this.checked;
        this.checked = newState;
        this.checkRecursive(newState);
    }
    
    checkRecursive(state){
        this.directories.forEach(d => {
            d.checked = state;
            /* d.files.forEach(f => {

            }); */
            d.checkRecursive(state);
        })
    }
}