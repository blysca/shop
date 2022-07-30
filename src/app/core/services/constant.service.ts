import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  App = "TaskManager";
  Ver = "1.0";
  API_URL = "http://base-url.com"
}
