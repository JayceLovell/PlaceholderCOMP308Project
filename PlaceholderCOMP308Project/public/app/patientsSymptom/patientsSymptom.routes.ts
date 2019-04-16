import { Routes } from '@angular/router';
import { PatientsSymptomComponent } from './patientsSymptom.component';
import { CreateComponent } from './create/create.component';
export const PatientsSymptomRoutes: Routes = [{
    path: 'patientsSymptom',
    component: PatientsSymptomComponent,
    children: [
        { path: 'create', component: CreateComponent }
    ],
}];