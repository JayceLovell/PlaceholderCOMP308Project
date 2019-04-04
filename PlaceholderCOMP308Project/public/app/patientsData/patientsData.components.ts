import { Component } from '@angular/core';
import { PatientsDataService } from './patientsData.service';
@Component({
    selector: 'patientsData',
    template: '<router-outlet></router-outlet>',
    providers: [PatientsDataService]
})
export class PatientsDataComponent { }
