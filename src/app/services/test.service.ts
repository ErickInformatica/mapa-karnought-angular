import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { GLOBAL } from "./global.service";

@Injectable({
  providedIn: 'root'
})
export class TestService {
  public url: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  operation(ope): Observable<any>{
    let params = JSON.stringify(ope);

    return this._http.post(this.url + '/test', params, { headers: this.headersVariable })
    // `${this.url}/registrarUsuario`
  }


}
