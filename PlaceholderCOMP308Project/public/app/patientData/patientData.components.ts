import { Component } from '@angular/core';
import { PatientDataService } from './patientData.service';
@Component({
    selector: 'patientData',
    template: '<router-outlet></router-outlet>',
    providers: [PatientDataService]
})
export class PatientDataComponent { }
