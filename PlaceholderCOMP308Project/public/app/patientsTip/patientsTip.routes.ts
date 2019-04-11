import { Routes } from '@angular/router';
import { PatientsTipComponent } from './patientsTip.component';
import { ViewComponent } from './view/view.component';
import { Edit } from './edit/edit.component';
export const PatientsTipRoutes: Routes = [{
    path: 'patientsTip',
    component: PatientsTipComponent,
    child: [
        { path: ':patientDataId', component: ViewComponent },
        { path: ':patientDataId/edit', component: EditComponent }
    ],
}];