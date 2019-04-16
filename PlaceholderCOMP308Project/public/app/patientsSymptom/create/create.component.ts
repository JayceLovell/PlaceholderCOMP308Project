import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsSymptomService } from '../patientsSymptom.service';
@Component({
    selector: 'create',
    templateUrl: 'app/patientsSymptom/create/create.template.html'
})
export class CreateComponent {
    patientSymptom: any = {};
    errorMessage: string;
    constructor(private _router: Router,
        private _patientsSymptomService: PatientsSymptomService) { }
    create() {
        this._patientsSymptomService
            .create(this.patientSymptom)
            .subscribe(createdsymptom => this._router.navigate(['/']),
                error => this.errorMessage = error);
    }
}