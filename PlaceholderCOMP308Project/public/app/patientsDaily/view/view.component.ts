import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { PatientsDailyService } from '../patientsDaily.service';
@Component({
    selector: 'view',
    templateUrl: 'app/patientsDaily/view/view.template.html',
})
export class ViewComponent {
    user: any;
    patientDaily: any;
    paramsObserver: any;
    errorMessage: string;
    allowEdit: boolean = false;
    //
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _patientsDailyService: PatientsDailyService) { }
    //
    ngOnInit() {
        this.user = this._authenticationService.user
        this.paramsObserver = this._route.params.subscribe(params => {
            let patientDailyId = params['patientDailyId'];
            this._patientsDailyService
                .read(patientDailyId)
                .subscribe(
                    patientDaily => {
                        this.patientDaily = patientDaily;
                        this.allowEdit = (this.user && this.user._id === this.
                            patientDaily.creator._id);
                    },
                    error => this._router.navigate(['/patientsDaily'])
                );
        });
    }
    //
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    //
}
