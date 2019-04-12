import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PatientsViewRoutes } from './patientsView.routes';
import { PatientsViewComponent } from './patientsView.component';
import { ViewComponent } from './View/view.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(PatientsViewRoutes),
    ],
    declarations: [
        PatientsViewComponent,
        ViewComponent
    ]
})
export class PatientsViewModule { }
