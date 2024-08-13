/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Repport } from '../../models/repport';

export interface GetRepportsByProjectId$Params {
  projectId: number;
}

export function getRepportsByProjectId(http: HttpClient, rootUrl: string, params: GetRepportsByProjectId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Repport>>> {
  const rb = new RequestBuilder(rootUrl, getRepportsByProjectId.PATH, 'get');
  if (params) {
    rb.path('projectId', params.projectId, {});
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

getRepportsByProjectId.PATH = '/api/repports/project/{projectId}';
