export class GenID {
    static COUNTER: number = 0;

    genID() {
        return GenID.COUNTER++;
    }
}
