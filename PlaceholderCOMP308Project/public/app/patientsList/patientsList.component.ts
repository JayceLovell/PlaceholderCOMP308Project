import { Component } from '@angular/core';
import { PatientsListService } from './patientsList.service';
@Component({
    selector: 'patientsList',
    template: '<router-outlet></router-outlet>',
    providers: [PatientsListService]
})
export class PatientsListComponent { }