import { Routes } from '@angular/router';
import { PatientsDataComponent } from './patientsData.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
export const PatientsDataRoutes: Routes = [{
    path: 'patientsData',
    component: PatientsDataComponent,
    children: [
        { path: '', component: ListComponent },
        { path: ':patientDataId', component: ViewComponent },
        { path: ':patientDataId/create', component: CreateComponent},
        { path: ':patientDataId/edit', component: EditComponent },
    ],
}];