import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';
@Injectable()
export class PatientsDataService {
    private _baseURL = 'api/patientsData';
    constructor(private _http: Http) { }
    create(patientData: any): Observable<any> {
        return this._http
            .post(this._baseURL, patientData)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    read(patientDataId: string): Observable<any> {
        return this._http
            .get(`${this._baseURL}/${patientDataId}`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    } update(patientData: any): Observable<any> {
        return this._http
            .put(`${this._baseURL}/${patientData._id}`, patientData).map((res: Response) => res.json())
            .catch(this.handleError);
    } updateTip(patientData: any): Observable<any> {
        return this._http
            .put(`${this._baseURL}/${patientData._id}`, patientData).map((res: Response) => res.json())
            .catch(this.handleError);
    }
    delete(patientDataId: any): Observable<any> {
        return this._http
            .delete(`${this._baseURL}/${patientDataId}`)
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
