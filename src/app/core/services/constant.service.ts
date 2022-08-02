import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  app = 'TaskManager';
  ver = '1.0';
  api_url = 'http://base-url.com';
  tags = 'Special events'
  title = 'nostrud voluptate sunt anim elit dolore do sint eiusmod'
  address = '361 Plaza Street, Gibsonia, Alabama, 2320'
  company = 'PYRAMAX'
  picture = 'http://placehold.it/352x264'
  cardType = 'horizont'
  dateTime = 'Tuesday, April 4, 2017 6:01 PM';

  /* constructor(@Inject() public app: string, ver: string, api_url: string) { } */
}
