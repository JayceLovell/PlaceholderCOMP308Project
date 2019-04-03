import { Routes } from '@angular/router';
import { PatientDataComponent } from './patientData.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
export const PatientDataRoutes: Routes = [{
    path: 'patientData',
    component: PatientDataComponent,
    children: [
        { path: '', component: ListComponent },
        { path: ':patientDataId', component: ViewComponent },
        { path: ':patientDataId/edit', component: EditComponent }
    ],
}];