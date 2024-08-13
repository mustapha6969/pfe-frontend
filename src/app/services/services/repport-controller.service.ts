/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createRepport } from '../fn/repport-controller/create-repport';
import { CreateRepport$Params } from '../fn/repport-controller/create-repport';
import { deleteRepport } from '../fn/repport-controller/delete-repport';
import { DeleteRepport$Params } from '../fn/repport-controller/delete-repport';
import { getAllRepports } from '../fn/repport-controller/get-all-repports';
import { GetAllRepports$Params } from '../fn/repport-controller/get-all-repports';
import { getRepportById } from '../fn/repport-controller/get-repport-by-id';
import { GetRepportById$Params } from '../fn/repport-controller/get-repport-by-id';
import { getRepportsByProjectId } from '../fn/repport-controller/get-repports-by-project-id';
import { GetRepportsByProjectId$Params } from '../fn/repport-controller/get-repports-by-project-id';
import { getRepportsBySecurityConsultantId } from '../fn/repport-controller/get-repports-by-security-consultant-id';
import { GetRepportsBySecurityConsultantId$Params } from '../fn/repport-controller/get-repports-by-security-consultant-id';
import { Repport } from '../models/repport';
import { updateRepport } from '../fn/repport-controller/update-repport';
import { UpdateRepport$Params } from '../fn/repport-controller/update-repport';

@Injectable({ providedIn: 'root' })
export class RepportControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getRepportById()` */
  static readonly GetRepportByIdPath = '/api/repports/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRepportById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRepportById$Response(params: GetRepportById$Params, context?: HttpContext): Observable<StrictHttpResponse<Repport>> {
    return getRepportById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRepportById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRepportById(params: GetRepportById$Params, context?: HttpContext): Observable<Repport> {
    return this.getRepportById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Repport>): Repport => r.body)
    );
  }

  /** Path part for operation `updateRepport()` */
  static readonly UpdateRepportPath = '/api/repports/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateRepport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRepport$Response(params: UpdateRepport$Params, context?: HttpContext): Observable<StrictHttpResponse<Repport>> {
    return updateRepport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateRepport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRepport(params: UpdateRepport$Params, context?: HttpContext): Observable<Repport> {
    return this.updateRepport$Response(params, context).pipe(
      map((r: StrictHttpResponse<Repport>): Repport => r.body)
    );
  }

  /** Path part for operation `deleteRepport()` */
  static readonly DeleteRepportPath = '/api/repports/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRepport()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRepport$Response(params: DeleteRepport$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteRepport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteRepport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRepport(params: DeleteRepport$Params, context?: HttpContext): Observable<void> {
    return this.deleteRepport$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllRepports()` */
  static readonly GetAllRepportsPath = '/api/repports';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllRepports()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllRepports$Response(params?: GetAllRepports$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Repport>>> {
    return getAllRepports(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllRepports$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllRepports(params?: GetAllRepports$Params, context?: HttpContext): Observable<Array<Repport>> {
    return this.getAllRepports$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Repport>>): Array<Repport> => r.body)
    );
  }

  /** Path part for operation `createRepport()` */
  static readonly CreateRepportPath = '/api/repports';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createRepport()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRepport$Response(params: CreateRepport$Params, context?: HttpContext): Observable<StrictHttpResponse<Repport>> {
    return createRepport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createRepport$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRepport(params: CreateRepport$Params, context?: HttpContext): Observable<Repport> {
    return this.createRepport$Response(params, context).pipe(
      map((r: StrictHttpResponse<Repport>): Repport => r.body)
    );
  }

  /** Path part for operation `getRepportsByProjectId()` */
  static readonly GetRepportsByProjectIdPath = '/api/repports/project/{projectId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRepportsByProjectId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRepportsByProjectId$Response(params: GetRepportsByProjectId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Repport>>> {
    return getRepportsByProjectId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRepportsByProjectId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRepportsByProjectId(params: GetRepportsByProjectId$Params, context?: HttpContext): Observable<Array<Repport>> {
    return this.getRepportsByProjectId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Repport>>): Array<Repport> => r.body)
    );
  }

  /** Path part for operation `getRepportsBySecurityConsultantId()` */
  static readonly GetRepportsBySecurityConsultantIdPath = '/api/repports/consultant/{consultantId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRepportsBySecurityConsultantId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRepportsBySecurityConsultantId$Response(params: GetRepportsBySecurityConsultantId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Repport>>> {
    return getRepportsBySecurityConsultantId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRepportsBySecurityConsultantId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRepportsBySecurityConsultantId(params: GetRepportsBySecurityConsultantId$Params, context?: HttpContext): Observable<Array<Repport>> {
    return this.getRepportsBySecurityConsultantId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Repport>>): Array<Repport> => r.body)
    );
  }

}
