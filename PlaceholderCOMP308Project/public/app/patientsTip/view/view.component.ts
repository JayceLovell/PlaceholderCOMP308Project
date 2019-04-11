import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { PatientsTipService } from '../../patientsTip/patientsTip.service';
@Component({
    selector: 'view',
    templateUrl: 'app/patientsTip/view/view.template.html'
})
export class ViewComponent {
    user: any;
    patientTip: any;
    paramsObserver: any;
    errorMessage: string;
    allowEdit: boolean = false;
    //
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _patientsTipService: PatientsTipService) { }
    //
    ngOnInit() {
        this.user = this._authenticationService.user
        this.paramsObserver = this._route.params.subscribe(params => {
            let patientTipId = params['patientTipId'];
            this._patientsTipService
                .read(patientTipId)
                .subscribe(
                    patientTip => {
                        this.patientTip = patientTip;
                        this.allowEdit = true;
                    },
                    error => this._router.navigate(['/patientsTip'])
                );
        });
    }
    //
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
}