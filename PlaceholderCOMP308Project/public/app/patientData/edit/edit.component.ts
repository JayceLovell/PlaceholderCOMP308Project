import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientDataService } from '../patientData.service';
@Component({
    selector: 'edit',
    templateUrl: 'app/paitentData/edit/edit.template.html';
})
export class EditComponent {
    patientData: any = {};
    errorMessage: string;
    paramsObserver: any;
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _patientDataService: PatientDataService) { }
    ngOnInit() {
        this.paramsObserver = this._route.params.subscribe(params => {
            let patientDataId = params['patientDataId'];
            this._patientDataService.read(patientDataId).subscribe(patientData => {
                this.patientData = patientData;
            },
                error => this._router.navigate(['/articles']));
        });
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    update() {
        this._patientDataService.update(this.patientData).subscribe(savedArticle => this._router.navigate(['/patientData', savedpatientData._id]),
            error => this.errorMessage =
                error);
    }
}