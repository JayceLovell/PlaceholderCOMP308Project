import { Routes } from '@angular/router';
import { PatientsDailyComponent } from './patientsDaily.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
//import { EditComponent } from './edit/edit.component';
export const PatientsDailyRoutes: Routes = [{
    path: 'patientsDaily',
    component: PatientsDailyComponent,
    children: [
        { path: 'create', component: CreateComponent },
        { path: ':patientDailyId', component: ViewComponent },
        //{ path: ':patientDailyId/edit', component: EditComponent }
    ],
}];