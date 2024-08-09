/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CustomerDto } from '../models/customer-dto';
import { delete5 } from '../fn/clients/delete-5';
import { Delete5$Params } from '../fn/clients/delete-5';
import { findAll4 } from '../fn/clients/find-all-4';
import { FindAll4$Params } from '../fn/clients/find-all-4';
import { findById6 } from '../fn/clients/find-by-id-6';
import { FindById6$Params } from '../fn/clients/find-by-id-6';
import { save6 } from '../fn/clients/save-6';
import { Save6$Params } from '../fn/clients/save-6';

@Injectable({ providedIn: 'root' })
export class ClientsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save6()` */
  static readonly Save6Path = '/gestionstock/v1/clients/create';

  /**
   * Enregistrer un client.
   *
   * Cette méthode permet d'enregistrer ou de modifier un client
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save6()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save6$Response(params: Save6$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerDto>> {
    return save6(this.http, this.rootUrl, params, context);
  }

  /**
   * Enregistrer un client.
   *
   * Cette méthode permet d'enregistrer ou de modifier un client
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save6$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save6(params: Save6$Params, context?: HttpContext): Observable<CustomerDto> {
    return this.save6$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerDto>): CustomerDto => r.body)
    );
  }

  /** Path part for operation `findById6()` */
  static readonly FindById6Path = '/gestionstock/v1/clients/{id}';

  /**
   * Rechercher un client par ID.
   *
   * Cette méthode permet de chercher un client par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById6()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById6$Response(params: FindById6$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerDto>> {
    return findById6(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher un client par ID.
   *
   * Cette méthode permet de chercher un client par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById6(params: FindById6$Params, context?: HttpContext): Observable<CustomerDto> {
    return this.findById6$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerDto>): CustomerDto => r.body)
    );
  }

  /** Path part for operation `findAll4()` */
  static readonly FindAll4Path = '/gestionstock/v1/clients/all';

  /**
   * Lister tous les clients.
   *
   * Cette méthode permet de lister tous les clients enregistrés dans la base de données
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4$Response(params?: FindAll4$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerDto>> {
    return findAll4(this.http, this.rootUrl, params, context);
  }

  /**
   * Lister tous les clients.
   *
   * Cette méthode permet de lister tous les clients enregistrés dans la base de données
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll4(params?: FindAll4$Params, context?: HttpContext): Observable<CustomerDto> {
    return this.findAll4$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerDto>): CustomerDto => r.body)
    );
  }

  /** Path part for operation `delete5()` */
  static readonly Delete5Path = '/gestionstock/v1/clients/delete/{id}';

  /**
   * Supprimer un client.
   *
   * Cette méthode permet de supprimer un client par ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete5()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete5$Response(params: Delete5$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete5(this.http, this.rootUrl, params, context);
  }

  /**
   * Supprimer un client.
   *
   * Cette méthode permet de supprimer un client par ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete5(params: Delete5$Params, context?: HttpContext): Observable<void> {
    return this.delete5$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
