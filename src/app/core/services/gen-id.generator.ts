import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class GenID {
    private static COUNTER: number = 0;

    genID(): number {
        return GenID.COUNTER++;
    }

    /* genID(): number {
        return +`${Date.now()}${(''+Math.random()).slice(2)}}`;
    } */
}
