import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { PatientsSymptomService } from '../patientsSymptom.service';
@Component({
    selector: 'view',
    templateUrl: 'app/patientsSymptom/view/view.template.html',
})
export class ViewComponent {
    user: any;
    patientSymptom: any;
    paramsObserver: any;
    errorMessage: string;
    allowEdit: boolean = false;
    //
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _patientsSymptomService: PatientsSymptomService) { }
    //
    ngOnInit() {
        this.user = this._authenticationService.user
        this.paramsObserver = this._route.params.subscribe(params => {
            let patientSymptomId = params['patientSymptomId'];
            this._patientsSymptomService
                .read(patientSymptomId)
                .subscribe(
                    patientSymptom => {
                        this.patientSymptom = patientSymptom;
                        this.allowEdit = (this.user && this.user._id === this.
                            patientSymptom.creator._id);
                    },
                    error => this._router.navigate(['/patientsSymptom'])
                );
        });
    }
    //
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
}
