import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';
@Injectable()
export class PatientsDailyService {
    private _baseURL = 'api/patientsDaily';
    constructor(private _http: Http) { }
    create(patientDaily: any): Observable<any> {
        return this._http
            .post(this._baseURL, patientDaily)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    read(patientDailyId: string): Observable<any> {
        return this._http
            .get(`${this._baseURL}/${patientDailyId}`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    } update(patientDaily: any): Observable<any> {
        return this._http
            .put(`${this._baseURL}/${patientDaily._id}`, patientDaily).map((res: Response) => res.json())
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        return Observable.throw(error.json().message || 'Server error');
    }
}
