import { Routes } from '@angular/router';
import { PatientsDataComponent } from './patientsData.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { ViewTipComponent } from './viewTip/view.component';
import { EditComponent } from './edit/edit.component';
import { EditTipComponent } from './editTip/edit.component';
export const PatientsDataRoutes: Routes = [{
    path: 'patientsData',
    component: PatientsDataComponent,
    children: [
        { path: '', component: ListComponent },
        { path: ':patientDataId', component: ViewComponent },
        { path: ':patientDataId/viewTip', component: ViewTipComponent },
        { path: ':patientDataId/edit', component: EditComponent },
        { path: ':patientDataId/editTip', component: EditTipComponent}
    ],
}];