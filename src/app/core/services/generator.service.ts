import { Injectable } from '@angular/core';
import { GenID } from './gen-id.generator';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(private generatorID: GenID) {
  }

  generate(n: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < n; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  getNewID(): number {
    return this.generatorID.genID();
  }
}

