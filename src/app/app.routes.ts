import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Login} from './login/login';
import { Register } from './register/register';
import { About } from './about/about';
import { Terms } from './terms/terms';
import { Products } from './products/products';

export const routes: Routes = [
    {
        path: '', component: Home
    },

    {
        path: 'login', component: Login
    },

    {
        path: 'register', component: Register
    },

    {
        path: 'about', component: About
    },

    {
        path: 'terms', component: Terms
    },

    {
        path:'products', component: Products
    }
];
