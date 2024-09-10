/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Project } from '../../models/project';

export interface CreateProject$Params {
      name: string;
      description: string;
}

export function createProject(http: HttpClient, rootUrl: string, params: CreateProject$Params, context?: HttpContext): Observable<StrictHttpResponse<Project>> {
  const token = localStorage.getItem('token');

  const rb = new RequestBuilder(rootUrl, createProject.PATH, 'post');
rb.query('name',params.name);
rb.query('description',params.description);

  if (token) {
    rb.header('Authorization', `Bearer ${token}`);
  } else {
    console.error('No token found in localStorage');
  }
  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Project>;
    })
  );
}

createProject.PATH = '/api/projects';
