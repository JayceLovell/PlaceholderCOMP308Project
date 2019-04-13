import { Component } from '@angular/core';
import { PatientsListService } from '../patientsList.service';
@Component({
    selector: 'list',
    templateUrl: 'app/patientsList/list/list.template.html'
})
export class ListComponent {
    patientsList: any;
    errorMessage: string;
    constructor(private _patientsListService: PatientsListService) { }
    ngOnInit() {
        this._patientsListService.list().subscribe(patientsList => this.patientsList
            = patientsList);
    }
}