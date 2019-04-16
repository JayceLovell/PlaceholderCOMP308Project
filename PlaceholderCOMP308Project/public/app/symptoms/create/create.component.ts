import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SymptomsService } from '../symptoms.service';
@Component({
    selector: 'create',
    templateUrl: 'app/symptoms/create/create.template.html'
})
export class CreateComponent {
    symptom: any = {};
    errorMessage: string;
    constructor(private _router: Router,
        private _symptomsService: SymptomsService) { }
    create() {
        this._symptomsService
            .create(this.symptom)
            .subscribe(createdsymptom => this._router.navigate(['/']),
                error => this.errorMessage = error);
    }
}