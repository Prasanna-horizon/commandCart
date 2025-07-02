import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Login} from './login/login';
import { Register } from './register/register';
import { About } from './about/about';
import { Terms } from './terms/terms';
import { Products } from './products/products';
import { AdminTerms } from './admin-terms/admin-terms';
import { AdminLogin } from './admin-login/admin-login';
import { AdminRegister } from './admin-register/admin-register';

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
    },

    {
        path:'admin-terms', component: AdminTerms
    },

    {
        path:'admin-login', component: AdminLogin
    },

    {
        path:'admin-register', component: AdminRegister
    }
];
