import { Component } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skill-matrix';

  ngOnInit(){
    let timer: any;

    $(".setupmenucls").on("mouseover", function() {
      clearTimeout(timer);
      openSetupSubmenu();
    }).on("mouseleave", function() {
      timer = setTimeout(
        closeSetupSubmenu
      , 1000);
    });

    $(".reportsmenucls").on("mouseover", function() {
      clearTimeout(timer);
      openReportsSubmenu();
    }).on("mouseleave", function() {
      timer = setTimeout(
        closeReportsSubmenu
      , 1000);
    });
  
    function openSetupSubmenu() {
      var className = $('ul').attr('class');
      console.log("className::"+className);
      if($(".reportssubmenu").hasClass("openreportssubmenucls")){
        $(".reportssubmenu").removeClass("openreportssubmenucls");
      }
      $(".setupsubmenu").addClass("opensetupsubmenucls");
    }
    function closeSetupSubmenu() {
      $(".setupsubmenu").removeClass("opensetupsubmenucls");
    }

    function openReportsSubmenu() {
      if($(".setupsubmenu").hasClass("opensetupsubmenucls")){
        $(".setupsubmenu").removeClass("opensetupsubmenucls");
      }
      $(".reportssubmenu").addClass("openreportssubmenucls");
    }
    function closeReportsSubmenu() {
      $(".reportssubmenu").removeClass("openreportssubmenucls");
    }
  }
}
