import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SymptomsRoutes } from './symptoms.routes';
import { SymptomsComponent } from './symptoms.component';
import { CreateComponent } from './create/create.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(SymptomsRoutes),
    ],
    declarations: [
        SymptomsComponent,
        CreateComponent,

    ]
})
export class SymptomModule { }