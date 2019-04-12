import { Routes } from '@angular/router';
import { PatientsDataComponent } from './patientsData.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { EditTipComponent } from './tip/edit/edit.component';
import { ViewTipComponent } from './tip/view/view.component';
export const PatientsDataRoutes: Routes = [{
    path: 'patientsData',
    component: PatientsDataComponent,
    children: [
        { path: '', component: ListComponent },
        { path: ':patientDataId', component: ViewComponent },
        { path: ':patientDataId/edit', component: EditComponent },
        { path: 'tip:patientDataId/view', component: ViewTipComponent },
        { path: 'tip:patientDataId/edit', component: EditTipComponent },
    ],
}];