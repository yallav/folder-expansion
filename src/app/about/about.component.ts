import { Component, ViewChild, Directive, Input } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})

export class AboutComponent {
    selectedIndex: number =0;
    timer: any;

    carouselimages = [
        {"imagesrc":"../../assets/showcase/images/demo/galleria/galleria1.JPG","text":"Happy Testing"},
        {"imagesrc":"../../assets/showcase/images/demo/galleria/galleria2.JPG","text":"Bad Testing"},
        {"imagesrc":"../../assets/showcase/images/demo/galleria/galleria3.JPG","text":"Sad Testing"}
    ]
    
    ngOnInit(){
        this.carousel();

        /* this.timer = setTimeout(() => {
            this.carousel();
        }, 4000); */
    }

    carousel(){
        this.selectedIndex = this.selectedIndex + 1;
        
        if(this.selectedIndex === this.carouselimages.length) {
            this.selectedIndex = 0;
        }

/*         this.timer = setTimeout(() => {
            this.carousel();
        }, 4000); */
    }

    selected(x) {
        this.selectedIndex = x;

        /* clearTimeout(this.timer);
        
        this.timer = setTimeout(() => {
            this.carousel();
        }, 4000); */
    }
    
    clickNext() {
        this.selectedIndex = this.selectedIndex + 1;
        if(this.selectedIndex === this.carouselimages.length) {
            this.selectedIndex = 0;
        }

        /* clearTimeout(this.timer);

        this.timer = setTimeout(() => {
            this.carousel();
        }, 4000); */
    }

    clickPrevious() {
        this.selectedIndex = this.selectedIndex -1;
        if(this.selectedIndex < 0) {
            this.selectedIndex = this.carouselimages.length -1;
        }

/*         clearTimeout(this.timer);

        this.timer = setTimeout(() => {
            this.carousel();
        }, 4000); */
    }    
}