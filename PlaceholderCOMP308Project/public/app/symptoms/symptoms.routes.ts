import { Routes } from '@angular/router';
import { SymptomsComponent } from './symptoms.component';
import { CreateComponent } from './create/create.component';
export const SymptomsRoutes: Routes = [{
    path: 'symptom',
    component: SymptomsComponent,
    children: [
        { path: 'create', component: CreateComponent }
    ],
}];