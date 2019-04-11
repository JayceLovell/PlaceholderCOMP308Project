import { Component } from '@angular/core';
import { PatientsDataService } from '../patientsData.service';
import { PatientsTipService } from '../../patientsTip/patientsTip.service';
@Component({
    selector: 'list',
    templateUrl: 'app/patientsData/list/list.template.html'
})
export class ListComponent {
    patientsData: any;
    patientsTip: any;
    errorMessage: string;
    constructor(private _patientsDataService: PatientsDataService,
    private _patientsTipService: PatientsTipService) { }
    ngOnInit() {
        console.log("list component "+this.patientsData+" "+this.patientsTip);
        this._patientsDataService.list().subscribe(patientsData => this.patientsData = patientsData);
        this._patientsTipService.list().subscribe(patientsTip => this.patientsTip = patientsTip);
        console.log("list component at end " + this.patientsData + " " + this.patientsTip);
    }
}

