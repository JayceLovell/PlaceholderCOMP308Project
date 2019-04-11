import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientsTipService } from '../patientsTip.service';
@Component({
    selector: 'edit',
    templateUrl: 'app/patientsTip/edit/edit.template.html'
})
export class EditComponent {
    patientTip: any = {};
    errorMessage: string;
    paramsObserver: any;
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _PatientsTipService: PatientsTipService) { }
    ngOnInit() {
        this.paramsObserver = this._route.params.subscribe(params => {
            let patientTipId = params['patientTipId'];
            this._PatientsTipService.read(patientTipId).subscribe(patientTip => {
                this.patientTip = patientTip;
            },
                error => this._router.navigate(['/patientsData']));
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    update() {
        this._PatientsTipService.update(this.patientTip).subscribe(savedPatientTip => this._router.navigate(['/patientsTip', savedPatientTip._id]),
            error => this.errorMessage =
                error);
    }
}