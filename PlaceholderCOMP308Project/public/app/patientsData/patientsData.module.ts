import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PatientsDataRoutes } from './patientsData.routes';
import { PatientsDataComponent } from './patientsData.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
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
        EditComponent,
        CreateComponent,
    ]
})
export class PatientsDataModule { }
