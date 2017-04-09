"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/pages/home.component");
var about_component_1 = require("./components/pages/about.component");
var contact_component_1 = require("./components/pages/contact.component");
var thankyou_component_1 = require("./components/pages/thankyou.component");
var appRoutes = [
    {
        path: '/NG2SampleSPA/',
        component: home_component_1.HomeComponent
    },
    {
        path: '/NG2SampleSPA/about',
        component: about_component_1.AboutComponent
    },
    {
        path: '/NG2SampleSPA/contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'thankyou',
        component: thankyou_component_1.ThankYouComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map