import { Routes } from '@angular/router';
import { PatientsListComponent } from './patientsList.service';
import { ListComponent } from './list/list.component';
export const PatientsList: Routes = [{
    path: 'patientsList',
    component: PatientsListComponent,
    children: [
        {path: '', component: ListComponent }]
}];