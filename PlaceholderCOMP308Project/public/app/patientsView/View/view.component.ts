import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { PatientsViewService } from '../patientsView.service';
@Component({
    selector: 'view',
    templateUrl: 'app/patientsView/view/view.template.html'
})
export class ViewComponent {
    user: any;
    patientData: any;
    paramsObserver: any;
    errorMessage: string;
    allowEdit: boolean = false;
    //
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _patientsViewService: PatientsViewService) { }
    //
    ngOnInit() {
        this.user = this._authenticationService.user
        this.paramsObserver = this._route.params.subscribe(params => {
            let patientDataId = params['patientDataId'];
            this._patientsViewService
                .read(patientDataId)
                .subscribe(
                    patientData => {
                        this.patientData = patientData;
                        this.allowEdit = true;
                    },
                    error => this._router.navigate(['/patientsView/'+patientDataId])
                );
        });
    }
    //
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    //
}
