import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';
@Injectable()
export class PatientsSymptomService {
    private _baseURL = 'api/patientsSymptom';
    constructor(private _http: Http) { }
    create(symptom: any): Observable<any> {
        return this._http
            .post(this._baseURL, symptom)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        return Observable.throw(error.json().message || 'Server error');
    }
}
