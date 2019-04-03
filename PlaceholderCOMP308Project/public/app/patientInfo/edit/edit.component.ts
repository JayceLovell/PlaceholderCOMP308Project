import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientInfosService } from '../patientInfo.service';
@Component({
    selector: 'edit',
    templateUrl: 'app/patientInfo/edit/edit.template.html'
})
export class EditComponent {
    patientInfo: any = {};
    errorMessage: string;
    paramsObserver: any;
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _patientInfosService: PatientInfosService) { }
    ngOnInit() {
        this.paramsObserver = this._route.params.subscribe(params => {
            let patientInfoId = params['patientInfoId'];
            this._patientInfosService.read(patientInfoId).subscribe(patientInfo => {
                this.patientInfo = patientInfo;
            },
                error => this._router.navigate(['/patientInfos']));
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    update() {
        this._patientInfosService.update(this.patientInfo).subscribe(savedPatientInfo => this._router.navigate(['/patientInfos', savedPatientInfo._id]),
            error => this.errorMessage =
                error);
    }
}