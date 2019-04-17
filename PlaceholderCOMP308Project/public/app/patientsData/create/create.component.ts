import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientsDataService } from '../patientsData.service';
@Component({
    selector: 'create',
    templateUrl: 'app/patientsData/create/create.template.html'
})
export class CreateComponent {
    patientData: any = {};
    errorMessage: string;
    paramsObserver: any;
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _patientsDataService: PatientsDataService) { }
    ngOnInit() {
        this.paramsObserver = this._route.params.subscribe(params => {
            this.patientData.patientId = params["patientDataId"];
        });
    }
    create() {
        this._patientsDataService.create(this.patientData)
            .subscribe(createdPatientData => this._router.navigate(['patientsData', createdPatientData._id]),
                error => this.errorMessage = "This never works, always get this error :" + error);
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
}