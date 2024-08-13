/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Repport } from '../../models/repport';

export interface CreateRepport$Params {
      body: Repport
}

export function createRepport(http: HttpClient, rootUrl: string, params: CreateRepport$Params, context?: HttpContext): Observable<StrictHttpResponse<Repport>> {
  const rb = new RequestBuilder(rootUrl, createRepport.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Repport>;
    })
  );
}

createRepport.PATH = '/api/repports';
