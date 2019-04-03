import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientInfosService } from '../patientInfo.service';
@Component({
    selector: 'create',
    templateUrl: 'app/patientInfo/create/create.template.html'
})
export class CreateComponent {
    patientInfo: any = {};
    errorMessage: string;
    constructor(private _router: Router,
        private _patientInfosService: PatientInfosService) { }
    create() {
        this._patientInfosService
            .create(this.patientInfo)
            .subscribe(createdPatientInfo => this._router.navigate(['/patientInfos',
                createdPatientInfo._id]),
                error => this.errorMessage = error);
    }
}
