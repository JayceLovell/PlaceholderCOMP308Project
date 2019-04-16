import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsDailyService } from '../patientsDaily.service';
@Component({
    selector: 'create',
    templateUrl: 'app/patientsDaily/create/create.template.html'
})
export class CreateComponent {
    patientDaily: any = {};
    errorMessage: string;
    constructor(private _router: Router,
        private _patientsDailyService: PatientsDailyService) { }
    create() {
        this._patientsDailyService
            .create(this.patientDaily)
            .subscribe(createdPatientDaily => this._router.navigate(['/patientsDaily',
                createdPatientDaily._id]),
                error => this.errorMessage = error);
    }
}