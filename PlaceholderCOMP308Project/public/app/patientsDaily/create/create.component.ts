import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientsDailyService } from '../patientsDaily.service';
@Component({
    selector: 'create',
    templateUrl: 'app/patientsDaily/create/create.template.html'
})
export class CreateComponent {
    patientDaily: any = {};
    errorMessage: string;
    paramsObserver: any;
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _patientsDailyService: PatientsDailyService) { }
    //THIS CODE SUPPOSE TO GET THE user ID FROM PREVIOUS PAGE
    ngOnInit() {
        this.paramsObserver = this._route.params.subscribe(params => {
            this.patientDaily.patientId = params["patientDailyId"];
        });
    }
    create() {
        this._patientsDailyService.create(this.patientDaily)
            .subscribe(createdPatientDaily => this._router.navigate(['/patientsDaily',createdPatientDaily._id]),
                error => this.errorMessage = error+" Lets see whats the navigation: "+this._router.navigate);
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
}