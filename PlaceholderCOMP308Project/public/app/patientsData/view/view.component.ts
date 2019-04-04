import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { PatientsDataService } from '../patientsData.service';
@Component({
    selector: 'view',
    templateUrl: 'app/patientsData/view/view.template.html',
})
export class ViewComponent {
    user: any;
    patientData: any;
    paramsObserver: any;
    errorMessage: string;
    //
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _patientsDataService: PatientsDataService) { }
    //
    ngOnInit() {
        this.user = this._authenticationService.user
        this.paramsObserver = this._route.params.subscribe(params => {
            let patientDateId = params['patientDateId'];
            this._patientsDataService
                .read(patientDateId)
                .subscribe(
                    patientsData => {
                        this.patientData = patientsData;
                    },
                    error => this._router.navigate(['/patientsData'])
                );
        });
    }
    //
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
}
