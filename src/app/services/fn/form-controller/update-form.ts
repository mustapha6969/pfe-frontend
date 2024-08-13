/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Form } from '../../models/form';

export interface UpdateForm$Params {
  id: number;
      body: Form
}

export function updateForm(http: HttpClient, rootUrl: string, params: UpdateForm$Params, context?: HttpContext): Observable<StrictHttpResponse<Form>> {
  const rb = new RequestBuilder(rootUrl, updateForm.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

updateForm.PATH = '/api/forms/{id}';
