import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { PatientsDataService } from '../patientsData.service';
@Component({
    selector: 'view',
    templateUrl: 'app/patientsData/viewTip/view.template.html'
})
export class ViewTipComponent {
    user: any;
    patientData: any;
    paramsObserver: any;
    errorMessage: string;
    allowEdit: boolean = false;
    //
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _patientsDataService: PatientsDataService) { }
    //
    ngOnInit() {
        this.user = this._authenticationService.user
        this.paramsObserver = this._route.params.subscribe(params => {
            let patientDataId = params['patientDataId'];         
            this._patientsDataService
                .read(patientDataId)
                .subscribe(
                    patientData => {
                        this.patientData = patientData;
                        this.allowEdit = true;
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
