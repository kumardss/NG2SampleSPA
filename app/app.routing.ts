import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { ContactComponent } from './components/pages/contact.component';
import { ThankYouComponent } from './components/pages/thankyou.component';

const appRoutes: Routes=[
    {
        path:'/NG2SampleSPA/',
        component:HomeComponent
    },
    {
        path:'/NG2SampleSPA/about',
        component:AboutComponent
    },
    {
        path:'/NG2SampleSPA/contact',
        component:ContactComponent
    }
    {
        path:'thankyou',
        component:ThankYouComponent
    }
];

export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);

