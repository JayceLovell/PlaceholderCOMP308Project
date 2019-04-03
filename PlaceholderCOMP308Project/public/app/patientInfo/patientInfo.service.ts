import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';
@Injectable()
export class PatientInfosService {
    private _baseURL = 'api/patientInfos';
    constructor(private _http: Http) { }
    create(patientInfo: any): Observable<any> {
        return this._http
            .post(this._baseURL, patientInfo)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    read(patientInfoId: string): Observable<any> {
        return this._http
            .get(`${this._baseURL}/${patientInfoId}`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    } update(patientInfo: any): Observable<any> {
        return this._http
            .put(`${this._baseURL}/${patientInfo._id}`, patientInfo).map((res: Response) => res.json())
            .catch(this.handleError);
    }
    delete(patientInfoId: any): Observable<any> {
        return this._http
            .delete(`${this._baseURL}/${patientInfoId}`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    list(): Observable<any> {
        return this._http
            .get(this._baseURL)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        return Observable.throw(error.json().message || 'Server error');
    }
}
