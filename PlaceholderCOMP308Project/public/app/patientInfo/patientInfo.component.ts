import { Component } from '@angular/core';
import { PatientInfosService } from './patientInfo.service';
@Component({
    selector: 'patientInfo',
    template: '<router-outlet></router-outlet>',
    providers: [PatientInfosService]
})
export class PatientInfoComponent { }
