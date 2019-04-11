import { Component } from '@angular/core';
import { PatientsDataService } from './patientsData.service';
import { PatientsTipService } from '../patientsTip/patientsTip.service';
@Component({
    selector: 'patientsData, patientsTip',
    template: '<router-outlet></router-outlet>',
    providers: [PatientsDataService,PatientsTipService],
})
export class PatientsDataComponent { }
