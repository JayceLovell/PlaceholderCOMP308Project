import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';
@Injectable()
export class PatientsViewService {
    private _baseURL = 'api/patientsView';
    constructor(private _http: Http) { }
    read(patientDataId: string): Observable<any> {
        return this._http
            .get(`${this._baseURL}/${patientDataId}`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        return Observable.throw(error.json().message || 'Server error');
    }
}
