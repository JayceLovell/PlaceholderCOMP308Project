import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PatientsDataRoutes } from './patientsData.routes';
import { PatientsDataComponent } from './patientsData.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { ViewTipComponent } from '../patientsData/tip/view/view.component';
import { EditComponent } from './edit/edit.component';
import { EditTipComponent } from '../patientsData/tip/edit/edit.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(PatientsDataRoutes),
    ],
    declarations: [
        PatientsDataComponent,
        ListComponent,
        ViewComponent,
        ViewTipComponent,
        EditComponent,
        EditTipComponent
    ]
})
export class PatientsDataModule { }
