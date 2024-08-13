/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createForm } from '../fn/form-controller/create-form';
import { CreateForm$Params } from '../fn/form-controller/create-form';
import { deleteForm } from '../fn/form-controller/delete-form';
import { DeleteForm$Params } from '../fn/form-controller/delete-form';
import { Form } from '../models/form';
import { getAllForms } from '../fn/form-controller/get-all-forms';
import { GetAllForms$Params } from '../fn/form-controller/get-all-forms';
import { getFormById } from '../fn/form-controller/get-form-by-id';
import { GetFormById$Params } from '../fn/form-controller/get-form-by-id';
import { getFormsByDeveloperId } from '../fn/form-controller/get-forms-by-developer-id';
import { GetFormsByDeveloperId$Params } from '../fn/form-controller/get-forms-by-developer-id';
import { getFormsByProjectId } from '../fn/form-controller/get-forms-by-project-id';
import { GetFormsByProjectId$Params } from '../fn/form-controller/get-forms-by-project-id';
import { updateForm } from '../fn/form-controller/update-form';
import { UpdateForm$Params } from '../fn/form-controller/update-form';

@Injectable({ providedIn: 'root' })
export class FormControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getFormById()` */
  static readonly GetFormByIdPath = '/api/forms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFormById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFormById$Response(params: GetFormById$Params, context?: HttpContext): Observable<StrictHttpResponse<Form>> {
    return getFormById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFormById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFormById(params: GetFormById$Params, context?: HttpContext): Observable<Form> {
    return this.getFormById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Form>): Form => r.body)
    );
  }

  /** Path part for operation `updateForm()` */
  static readonly UpdateFormPath = '/api/forms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateForm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateForm$Response(params: UpdateForm$Params, context?: HttpContext): Observable<StrictHttpResponse<Form>> {
    return updateForm(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateForm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateForm(params: UpdateForm$Params, context?: HttpContext): Observable<Form> {
    return this.updateForm$Response(params, context).pipe(
      map((r: StrictHttpResponse<Form>): Form => r.body)
    );
  }

  /** Path part for operation `deleteForm()` */
  static readonly DeleteFormPath = '/api/forms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteForm()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteForm$Response(params: DeleteForm$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteForm(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteForm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteForm(params: DeleteForm$Params, context?: HttpContext): Observable<void> {
    return this.deleteForm$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllForms()` */
  static readonly GetAllFormsPath = '/api/forms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllForms()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllForms$Response(params?: GetAllForms$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Form>>> {
    return getAllForms(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllForms$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllForms(params?: GetAllForms$Params, context?: HttpContext): Observable<Array<Form>> {
    return this.getAllForms$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Form>>): Array<Form> => r.body)
    );
  }

  /** Path part for operation `createForm()` */
  static readonly CreateFormPath = '/api/forms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createForm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createForm$Response(params: CreateForm$Params, context?: HttpContext): Observable<StrictHttpResponse<Form>> {
    return createForm(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createForm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createForm(params: CreateForm$Params, context?: HttpContext): Observable<Form> {
    return this.createForm$Response(params, context).pipe(
      map((r: StrictHttpResponse<Form>): Form => r.body)
    );
  }

  /** Path part for operation `getFormsByProjectId()` */
  static readonly GetFormsByProjectIdPath = '/api/forms/project/{projectId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFormsByProjectId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFormsByProjectId$Response(params: GetFormsByProjectId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Form>>> {
    return getFormsByProjectId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFormsByProjectId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFormsByProjectId(params: GetFormsByProjectId$Params, context?: HttpContext): Observable<Array<Form>> {
    return this.getFormsByProjectId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Form>>): Array<Form> => r.body)
    );
  }

  /** Path part for operation `getFormsByDeveloperId()` */
  static readonly GetFormsByDeveloperIdPath = '/api/forms/developer/{developerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFormsByDeveloperId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFormsByDeveloperId$Response(params: GetFormsByDeveloperId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Form>>> {
    return getFormsByDeveloperId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFormsByDeveloperId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFormsByDeveloperId(params: GetFormsByDeveloperId$Params, context?: HttpContext): Observable<Array<Form>> {
    return this.getFormsByDeveloperId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Form>>): Array<Form> => r.body)
    );
  }

}
