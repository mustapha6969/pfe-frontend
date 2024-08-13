/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Repport } from '../../models/repport';

export interface GetRepportsBySecurityConsultantId$Params {
  consultantId: number;
}

export function getRepportsBySecurityConsultantId(http: HttpClient, rootUrl: string, params: GetRepportsBySecurityConsultantId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Repport>>> {
  const rb = new RequestBuilder(rootUrl, getRepportsBySecurityConsultantId.PATH, 'get');
  if (params) {
    rb.path('consultantId', params.consultantId, {});
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

getRepportsBySecurityConsultantId.PATH = '/api/repports/consultant/{consultantId}';
