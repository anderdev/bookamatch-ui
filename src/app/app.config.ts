import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

const hostApi = process.env.NODE_ENV === 'development' ? 'http://localhost' : 'https://sing-generator-node.herokuapp.com';
const portApi = process.env.NODE_ENV === 'development' ? '8080' : '';
const baseURLApi = `${hostApi}${portApi ? `:${portApi}` : ``}`;

@Injectable({
  providedIn: 'root'
})
export class AppConfig {
  config = {
    version: '0.0.1',
    remote: 'https://sing-generator-node.herokuapp.com',
    isBackend: environment.backend,
    hostApi,
    portApi,
    baseURLApi,
    appName: 'Sporty Mate',
    auth: {
      email: 'admin@flatlogic.com',
      password: 'password'
    },
  };

  constructor() {
  }

  getConfig(): Object {
    return this.config;
  }
}
