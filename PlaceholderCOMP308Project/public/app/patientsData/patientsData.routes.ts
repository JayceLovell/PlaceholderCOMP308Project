import { Routes } from '@angular/router';
import { PatientsDataComponent } from './patientsData.components'
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
export const PatientsDataRoutes: Routes = [{
    path: 'patientsData',
    component: PatientsDataComponent,
    children: [
        { path: '', component: ListComponent },
        { path: ':patientDataId', component: ViewComponent },
        { path: ':patientDataId/edit', component: EditComponent }
    ],
}];