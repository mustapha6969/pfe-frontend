/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Form } from '../../models/form';

export interface GetFormById$Params {
  id: number;
}

export function getFormById(http: HttpClient, rootUrl: string, params: GetFormById$Params, context?: HttpContext): Observable<StrictHttpResponse<Form>> {
  const rb = new RequestBuilder(rootUrl, getFormById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Form>;
    })
  );
}

getFormById.PATH = '/api/forms/{id}';
