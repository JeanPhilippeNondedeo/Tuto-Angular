import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';

import { makeServer } from './app/mirage-server';
import {provideRouter} from "@angular/router";
import {routes} from "./app/app.routes";

fetch('/environment.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Erreur lors du chargement de environment.json : ${response.statusText}`);
        }
        return response.json();
    })
    .then((environment) => {
        if (environment.production) {
            enableProdMode();
        } else {
            makeServer(); // Appelle directement Mirage.js
        }

        bootstrapApplication(AppComponent, {
            providers: [
                provideHttpClient(withInterceptorsFromDi()),
                provideRouter(routes)
            ],
        }).catch((err) => console.error('Erreur bootstrap :', err));
    })
    .catch((err) => console.error('Erreur fetch :', err));




