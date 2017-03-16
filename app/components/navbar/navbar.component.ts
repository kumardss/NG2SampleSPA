import { Component } from '@angular/core';  

@Component({
    moduleId:module.id,
    selector:"navbar",
    templateUrl:"navbar.component.html"
})

export class NavbarComponent{
    branding: string ="NG2 App";
    // menuItems: string[]=["Home","About","Contact"];
}