import { ConfigModel } from './config-model';
import { Injectable } from '@angular/core';
import { generate } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private baseConfig: ConfigModel = {} as ConfigModel;

  constructor() { }

  get config() {
    return this.baseConfig;
  }

  set config(c: Partial<ConfigModel>) {
    this.baseConfig = {
      id: c.id || '1',
      email: c.email || 'N/A',
      login: c.login || `guest`
    }
  }

  set configProperty(c: { key: string, value: any }) {
    this.baseConfig[c.key] = c.value;
  }
}
