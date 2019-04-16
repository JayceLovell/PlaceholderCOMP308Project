import { Component } from '@angular/core';
import { PatientsDailyService } from './patientsDaily.service';
@Component({
    selector: 'patientsDaily',
    template: '<router-outlet></router-outlet>',
    providers: [PatientsDailyService]
})
export class PatientsDailyComponent { }
