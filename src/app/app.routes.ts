import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {PagenotfoundComponent} from './shared/pagenotfound/pagenotfound.component';
import {RegisterComponent} from './register/register.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: PagenotfoundComponent },
];

export const APP_ROUTES =  RouterModule.forRoot(appRoutes, { useHash: true });

