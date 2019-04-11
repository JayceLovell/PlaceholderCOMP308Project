import { Routes } from '@angular/router';
import { PatientsTipComponent } from './patientsTip.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
export const PatientsTipRoutes: Routes = [{
    path: 'patientsTip',
    component: PatientsTipComponent,
    children: [
        { path: ':patientTipId', component: ViewComponent },
        { path: ':patientTipId/edit', component: EditComponent }
    ],
}];