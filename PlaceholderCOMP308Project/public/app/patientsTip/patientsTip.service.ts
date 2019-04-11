import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';
@Injectable()
export class PatientsTipService {
    private _baseURL = 'api/patientsTip';
    constructor(private _http: Http) { }
    read(patientTipId: string): Observable<any> {
        return this._http
            .get(`${this._baseURL}/${patientTipId}`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        return Observable.throw(error.json().message || 'Server error');
    }
    update(patientTip: any): Observable<any> {
        return this._http
            .put(`${this._baseURL}/${patientTip._id}`, patientTip).map((res: Response) => res.json())
            .catch(this.handleError);
    }
}