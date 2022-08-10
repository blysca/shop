import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform<T>(arr: T[], key: string, isAsc: boolean = true): T[] {
    console.log({ key }, { isAsc });
    console.log([...arr]);

    if (!key) {
      return arr;
    }

    console.log({ key }, { isAsc });

    const sorted = arr.sort((a: any, b: any) => {
      if (typeof a[key] === 'string') {
        if (isAsc) {
          return a[key].localeCompare(b[key]);
        }
        return b[key].localeCompare(a[key]);;
      } else {
        if (isAsc) {
          return a[key] - b[key];
        }
        return b[key] - a[key];
      }
    });
    console.log({ sorted });

    return sorted;
  }

}
