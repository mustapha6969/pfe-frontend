/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { User } from '../../models/user';

export interface CreateUser$Params {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}

export function createUser(http: HttpClient, rootUrl: string, params: CreateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
  const token = localStorage.getItem('token');

  const rb = new RequestBuilder(rootUrl, createUser.PATH, 'post');
  rb.query('firstname', params.firstname);
  rb.query('lastname', params.lastname);
  rb.query('email', params.email);
  rb.query('password', params.password);
  rb.query('role', params.role);

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
      return r as StrictHttpResponse<User>;
    })
  );
}

createUser.PATH = '/api/users';
