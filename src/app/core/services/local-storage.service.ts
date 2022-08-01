import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getlocalStorage(key: string): string {
    return window.localStorage.getItem('myCat') as string;
  }

  setlocalStorage(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  removelocalStorage(key: string): void {
    window.localStorage.removeItem(key);
  }

}
