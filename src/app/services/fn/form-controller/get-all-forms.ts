/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Form } from '../../models/form';

export interface GetAllForms$Params {
}

export function getAllForms(http: HttpClient, rootUrl: string, params?: GetAllForms$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Form>>> {
  const rb = new RequestBuilder(rootUrl, getAllForms.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Form>>;
    })
  );
}

getAllForms.PATH = '/api/forms';
