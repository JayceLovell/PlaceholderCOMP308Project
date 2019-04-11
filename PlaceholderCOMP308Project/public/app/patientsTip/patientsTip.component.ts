import { Component } from '@angular/core';
import { PatientsTipService } from './patientsTip.service';
@Component({
    selector: 'patientsTip',
    template: '<router-outlet></router-outlet>',
    providers: [PatientsTipService]
})
export class PatientsTipComponent { }