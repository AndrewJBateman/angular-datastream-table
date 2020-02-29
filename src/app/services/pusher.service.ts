import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';

import {environment} from '../../environments/environment';

const api_key = environment.API_KEY;
const cluster = environment.CLUSTER;

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  private _pusher: any;

  constructor() {
    this._pusher = new Pusher(api_key, {
      cluster: cluster,
      forceTLS: true
    });
  }

  getPusher() {
    return this._pusher;
  }
}
