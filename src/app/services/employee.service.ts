import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, mapTo } from 'rxjs/operators';

import { IEmployee } from '../interfaces/iemployee';
import { PusherService } from './pusher.service';

@Injectable()
export class EmployeeService {
  private _endPoint = 'http://localhost:2000/employee';
  private _channel: any;

  constructor(private _http: HttpClient, private _pusherService: PusherService) {
    this._channel = this._pusherService.getPusher().subscribe('employee');
  }

  // function to return channel
  getChannel () {
    return this._channel;
  }

  list (): Observable<IEmployee[]> {
    return this._http.get(this._endPoint).pipe(map(res => <IEmployee[]> res));
  }

  // create new employee, return Observable<IEmployee> with the id.
  create(param: IEmployee): Observable<IEmployee> {
    return this._http.post(this._endPoint, param).pipe(map(res => <IEmployee> res));
  }

  delete(employee: IEmployee): Observable<IEmployee> {
    return this._http.delete(`${this._endPoint}/${employee.id}`).pipe(mapTo(employee));
  }
}
