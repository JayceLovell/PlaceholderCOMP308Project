import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientsDataService } from '../patientsData.service';
@Component({
    selector: 'editTip',
    templateUrl: 'app/patientsData/editTip/edit.template.html'
})
export class EditTipComponent {
    patientData: any = {};
    errorMessage: string;
    paramsObserver: any;
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _PatientsDataService: PatientsDataService) { }
    ngOnInit() {
        this.paramsObserver = this._route.params.subscribe(params => {
            let patientDataId = params['patientDataId'];
            this._PatientsDataService.read(patientDataId).subscribe(patientData => {
                this.patientData = patientData;
            },
                error => this._router.navigate(['/patientsData']));
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    update() {
        this._PatientsDataService.updateTip(this.patientData).subscribe(savedPatientData => this._router.navigate(['/patientsData', savedPatientData._id,'/editTip']),
            error => this.errorMessage = error);
    }
}