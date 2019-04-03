import { Routes } from '@angular/router';
import { PatientInfoComponent } from './patientInfo.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
export const PatientInfoRoute: Routes = [{
    path: 'articles',
    component: PatientInfoComponent,
    children: [
        { path: '', component: ListComponent },
        { path: 'create', component: CreateComponent },
        { path: ':patientInfoId', component: ViewComponent },
        { path: ':patientInfoId/edit', component: EditComponent }
    ],
}];