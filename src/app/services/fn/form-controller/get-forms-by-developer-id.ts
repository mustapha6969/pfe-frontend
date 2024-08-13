/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Form } from '../../models/form';

export interface GetFormsByDeveloperId$Params {
  developerId: number;
}

export function getFormsByDeveloperId(http: HttpClient, rootUrl: string, params: GetFormsByDeveloperId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Form>>> {
  const rb = new RequestBuilder(rootUrl, getFormsByDeveloperId.PATH, 'get');
  if (params) {
    rb.path('developerId', params.developerId, {});
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

getFormsByDeveloperId.PATH = '/api/forms/developer/{developerId}';
