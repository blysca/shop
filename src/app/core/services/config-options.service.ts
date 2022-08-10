import { type ConfigModel } from './config-model';
import { Injectable } from '@angular/core';
import { generate } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private baseConfig: ConfigModel = {
    email: 'my@mail.com',
    id: '52b7d932-f302-4933-994c-5f2a8573f062',
    login: 'Alabama Skyplex '
  };

  constructor() { }

  get config() {
    return this.baseConfig;
  }

  set config(c: Partial<ConfigModel>) {
    // а так можно?
    this.baseConfig = {...this.baseConfig, ...c};

    // if (c.email) {
    //   this.baseConfig.email = c.email;
    // }
    // if (c.id) {
    //   this.baseConfig.id = c.id;
    // }
    // if (c.login) {
    //   this.baseConfig.login = c.login;
    // }
  }

  set configProperty(c: { key: string, value: any }) {
    console.log({ c });

    this.baseConfig[c.key] = c.value;
    console.log(this.baseConfig);

  }
}
