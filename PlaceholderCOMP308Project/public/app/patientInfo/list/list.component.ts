import { Component } from '@angular/core';
import { PatientInfosService } from '../patientInfo.service';
@Component({
    selector: 'list',
    templateUrl: 'app/patientInfo/list/list.template.html'
})
export class ListComponent {
    patientInfos: any;
    errorMessage: string;
    constructor(private _patientInfosService: PatientInfosService) { }
    ngOnInit() {
        this._patientInfosService.list().subscribe(patientInfos => this.patientInfos
            = patientInfos);
    }
}

