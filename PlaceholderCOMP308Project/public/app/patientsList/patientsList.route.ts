import { Routes } from '@angular/router';
import { PatientsListComponent } from './patientsList.component';
import { ListComponent } from './list/list.component';
export const PatientsListRoutes: Routes = [{
    path: 'patientsList',
    component: PatientsListComponent,
    children: [
        { path: '', component: ListComponent }
    ],
}];