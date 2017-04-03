import { Component } from '@angular/core';

@Component({
    moduleId:module.id,
    selector:'thank-you',
    templateUrl:'thankyou.component.html'
})


export class ThankYouComponent {
   message: string="Thank you for sending us your details. We will reach you as soon as possible via email.";
}