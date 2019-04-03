import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { PatientDataService } from '../patientData.service';
@Component({
    selector: 'view',
    templateUrl: 'app/patientData/view/view.template.html',
})
export class ViewComponent {
    user: any;
    patientDate: any;
    paramsObserver: any;
    errorMessage: string;
    allowEdit: boolean = false;
    //
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _patientDataService: PatientDataService) { }
    //
    ngOnInit() {
        this.user = this._authenticationService.user
        this.paramsObserver = this._route.params.subscribe(params => {
            let patientDateId = params['patientDateId'];
            this._patientDataService
                .read(patientDateId)
                .subscribe(
                    patientDate => {
                        this.patientDate = patientDate;
                        this.allowEdit = (this.user && this.user._id === this.
                            patientDate.creator._id);
                    },
                    error => this._router.navigate(['/patientData'])
                );
        });
    }
    //
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
}
