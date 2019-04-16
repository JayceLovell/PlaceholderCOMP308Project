import { Component } from '@angular/core';
import { PatientsSymptomService } from './patientsSymptom.service';
@Component({
    selector: 'symptoms',
    template: '<router-outlet></router-outlet>',
    providers: [PatientsSymptomService]
})
export class PatientsSymptomComponent { }