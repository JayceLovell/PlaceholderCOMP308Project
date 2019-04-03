import { Component } from '@angular/core';
import { PatientDataService } from '../patientData.service';
@Component({
    selector: 'list',
    templateUrl: 'app/patientData/list/list.template.html'
})
export class ListComponent {
    patientData: any;
    errorMessage: string;
    constructor(private _patientDataService: PatientDataService) { }
    ngOnInit() {
        this._patientDataService.list().subscribe(this.patientData => this.patientData
            = this.patientData);
    }
}

