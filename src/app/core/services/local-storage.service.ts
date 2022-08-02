import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  getlocalStorage(key: string): string {
    return window.localStorage.getItem(key) as string;
  }

  setlocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  removelocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

}
