import { Injectable, Optional } from '@angular/core';
import { GenID } from './gen-id.generator';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(@Optional() private generatorID: GenID) {
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
    const id = this.generatorID?.genID() ?? `${Date.now()}${(''+Math.random()).slice(2)}}`;
    return id;
  }
}

