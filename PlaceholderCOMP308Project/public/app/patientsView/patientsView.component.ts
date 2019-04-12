import { Component } from '@angular/core';
import { PatientsViewService } from './patientsView.service';
@Component({
    selector: 'patientsView',
    template: '<router-outlet></router-outlet>',
    providers: [PatientsViewService]
})
export class PatientsViewComponent { }
