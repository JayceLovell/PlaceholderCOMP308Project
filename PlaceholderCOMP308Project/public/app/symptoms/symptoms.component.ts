import { Component } from '@angular/core';
import { SymptomsService } from './Symptoms.service';
@Component({
    selector: 'symptoms',
    template: '<router-outlet></router-outlet>',
    providers: [SymptomsService]
})
export class SymptomsComponent { }