import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { PatientInfosService } from '../patientinfo.service';
@Component({
    selector: 'view',
    templateUrl: 'app/patientInfo/view/view.template.html',
})
export class ViewComponent {
    user: any;
    patientInfo: any;
    paramsObserver: any;
    errorMessage: string;
    allowEdit: boolean = false;
    //
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _patientInfosService: PatientInfosService) { }
    //
    ngOnInit() {
        this.user = this._authenticationService.user
        this.paramsObserver = this._route.params.subscribe(params => {
            let patientInfoId = params['patientInfoId'];
            this._patientInfosService
                .read(patientInfoId)
                .subscribe(
                patientInfo => {
                    this.patientInfo = patientInfo;
                        this.allowEdit = (this.user && this.user._id === this.
                            patientInfo.creator._id);
                    },
                error => this._router.navigate(['/patientInfos'])
                );
        });
    }
    //
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    //
    delete() {
        this._patientInfosService.delete(this.patientInfo._id).
            subscribe(deletedPatientInfo => this._router.navigate(['/patientInfos']),
                error => this.errorMessage = error);
    }
}
