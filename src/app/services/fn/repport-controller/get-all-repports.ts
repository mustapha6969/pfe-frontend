/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Repport } from '../../models/repport';

export interface GetAllRepports$Params {
}

export function getAllRepports(http: HttpClient, rootUrl: string, params?: GetAllRepports$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Repport>>> {
  const rb = new RequestBuilder(rootUrl, getAllRepports.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Repport>>;
    })
  );
}

getAllRepports.PATH = '/api/repports';
