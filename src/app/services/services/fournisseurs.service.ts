/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete2 } from '../fn/fournisseurs/delete-2';
import { Delete2$Params } from '../fn/fournisseurs/delete-2';
import { findAll2 } from '../fn/fournisseurs/find-all-2';
import { FindAll2$Params } from '../fn/fournisseurs/find-all-2';
import { findById2 } from '../fn/fournisseurs/find-by-id-2';
import { FindById2$Params } from '../fn/fournisseurs/find-by-id-2';
import { save2 } from '../fn/fournisseurs/save-2';
import { Save2$Params } from '../fn/fournisseurs/save-2';
import { SupplierDto } from '../models/supplier-dto';

@Injectable({ providedIn: 'root' })
export class FournisseursService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save2()` */
  static readonly Save2Path = '/gestionstock/v1/fournisseurs/create';

  /**
   * Enregistrer un fournisseur.
   *
   * Cette méthode permet d'enregistrer ou de modifier un fournisseur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2$Response(params: Save2$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierDto>> {
    return save2(this.http, this.rootUrl, params, context);
  }

  /**
   * Enregistrer un fournisseur.
   *
   * Cette méthode permet d'enregistrer ou de modifier un fournisseur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2(params: Save2$Params, context?: HttpContext): Observable<SupplierDto> {
    return this.save2$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupplierDto>): SupplierDto => r.body)
    );
  }

  /** Path part for operation `findById2()` */
  static readonly FindById2Path = '/gestionstock/v1/fournisseurs/{id}';

  /**
   * Rechercher un fournisseur par ID.
   *
   * Cette méthode permet de chercher un fournisseur par ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2$Response(params: FindById2$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierDto>> {
    return findById2(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher un fournisseur par ID.
   *
   * Cette méthode permet de chercher un fournisseur par ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2(params: FindById2$Params, context?: HttpContext): Observable<SupplierDto> {
    return this.findById2$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupplierDto>): SupplierDto => r.body)
    );
  }

  /** Path part for operation `findAll2()` */
  static readonly FindAll2Path = '/gestionstock/v1/fournisseurs/all';

  /**
   * Lister tous les fournisseurs.
   *
   * Cette méthode permet de lister tous les fournisseurs
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2$Response(params?: FindAll2$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierDto>> {
    return findAll2(this.http, this.rootUrl, params, context);
  }

  /**
   * Lister tous les fournisseurs.
   *
   * Cette méthode permet de lister tous les fournisseurs
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2(params?: FindAll2$Params, context?: HttpContext): Observable<SupplierDto> {
    return this.findAll2$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupplierDto>): SupplierDto => r.body)
    );
  }

  /** Path part for operation `delete2()` */
  static readonly Delete2Path = '/gestionstock/v1/fournisseurs/delete/{id}';

  /**
   * Supprimer un fournisseur.
   *
   * Cette méthode permet de supprimer un fournisseur par ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2$Response(params: Delete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete2(this.http, this.rootUrl, params, context);
  }

  /**
   * Supprimer un fournisseur.
   *
   * Cette méthode permet de supprimer un fournisseur par ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2(params: Delete2$Params, context?: HttpContext): Observable<void> {
    return this.delete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
