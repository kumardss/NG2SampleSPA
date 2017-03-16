import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "jumbotron",
    templateUrl: "jumbotron.component.html"
})

export class JumbotronComponent {
   private jbtHeading: string;
   private jbtText: string;
   private btnText: string;
   private btnUrl: string;

    constructor() {
        this.jbtHeading = "Hello, Welcome to NG2 App!";
        this.jbtText = "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.";
        this.btnText = "Learn more";
        this.btnUrl = "/about";
    }
}