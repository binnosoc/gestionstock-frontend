/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CompanyDto } from '../models/company-dto';
import { findById3 } from '../fn/companies/find-by-id-3';
import { FindById3$Params } from '../fn/companies/find-by-id-3';
import { save3 } from '../fn/companies/save-3';
import { Save3$Params } from '../fn/companies/save-3';

@Injectable({ providedIn: 'root' })
export class CompaniesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save3()` */
  static readonly Save3Path = '/gestionstock/v1/companies/create';

  /**
   * Enregistrer une entreprise.
   *
   * Cette méthode permet d'enregistrer ou modifier une entreprise
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save3()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save3$Response(params: Save3$Params, context?: HttpContext): Observable<StrictHttpResponse<CompanyDto>> {
    return save3(this.http, this.rootUrl, params, context);
  }

  /**
   * Enregistrer une entreprise.
   *
   * Cette méthode permet d'enregistrer ou modifier une entreprise
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save3$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save3(params: Save3$Params, context?: HttpContext): Observable<CompanyDto> {
    return this.save3$Response(params, context).pipe(
      map((r: StrictHttpResponse<CompanyDto>): CompanyDto => r.body)
    );
  }

  /** Path part for operation `findById3()` */
  static readonly FindById3Path = '/gestionstock/v1/companies/search/{idCompany}';

  /**
   * Rechercher une entreprise par son ID.
   *
   * Cette méthode permet de chercher un entreprise par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3$Response(params: FindById3$Params, context?: HttpContext): Observable<StrictHttpResponse<CompanyDto>> {
    return findById3(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher une entreprise par son ID.
   *
   * Cette méthode permet de chercher un entreprise par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3(params: FindById3$Params, context?: HttpContext): Observable<CompanyDto> {
    return this.findById3$Response(params, context).pipe(
      map((r: StrictHttpResponse<CompanyDto>): CompanyDto => r.body)
    );
  }

}
