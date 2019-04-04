import { Component } from '@angular/core';
import { PatientsDataService } from '../patientsData.service';
@Component({
    selector: 'list',
    templateUrl: 'app/patientsData/list/list.template.html'
})
export class ListComponent {
    patientsData: any;
    errorMessage: string;
    constructor(private _patientsDataService: PatientsDataService) { }
    ngOnInit() {
        console.log("calling list");
        this._patientsDataService.list().subscribe(patientsData => this.patientsData
            = patientsData);
        console.log("cry bloody murder" + JSON.stringify(this.patientsData));
    }
}

