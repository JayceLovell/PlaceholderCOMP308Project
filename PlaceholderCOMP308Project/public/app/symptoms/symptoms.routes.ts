import { Routes } from '@angular/router';
import { SymptomsComponent } from './symptoms.component';
import { CreateComponent } from './create/create.component';
export const SymptomsRoutes: Routes = [{
    path: 'symptoms',
    component: SymptomsComponent,
    children: [
        { path: 'create', component: CreateComponent }
    ],
}];