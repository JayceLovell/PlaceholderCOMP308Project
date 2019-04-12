import { Routes } from '@angular/router';
import { PatientsViewComponent } from './patientsView.component';
import { ViewComponent } from './View/view.component';
export const PatientsViewRoutes: Routes = [{
    path: 'patientsView',
    component: PatientsViewComponent,
    children: [
        { path: '', component: ViewComponent },
    ],
}];