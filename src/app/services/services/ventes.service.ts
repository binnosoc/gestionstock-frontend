/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete$ } from '../fn/ventes/delete';
import { Delete$Params } from '../fn/ventes/delete';
import { findAll } from '../fn/ventes/find-all';
import { FindAll$Params } from '../fn/ventes/find-all';
import { findByCode } from '../fn/ventes/find-by-code';
import { FindByCode$Params } from '../fn/ventes/find-by-code';
import { findById } from '../fn/ventes/find-by-id';
import { FindById$Params } from '../fn/ventes/find-by-id';
import { SaleDto } from '../models/sale-dto';
import { save } from '../fn/ventes/save';
import { Save$Params } from '../fn/ventes/save';

@Injectable({ providedIn: 'root' })
export class VentesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save()` */
  static readonly SavePath = '/gestionstock/v1/ventes/create';

  /**
   * Enregistrer une vente.
   *
   * Cette méthode permet d'enregistrer ou de modifier une vente
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save$Response(params: Save$Params, context?: HttpContext): Observable<StrictHttpResponse<SaleDto>> {
    return save(this.http, this.rootUrl, params, context);
  }

  /**
   * Enregistrer une vente.
   *
   * Cette méthode permet d'enregistrer ou de modifier une vente
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save(params: Save$Params, context?: HttpContext): Observable<SaleDto> {
    return this.save$Response(params, context).pipe(
      map((r: StrictHttpResponse<SaleDto>): SaleDto => r.body)
    );
  }

  /** Path part for operation `findById()` */
  static readonly FindByIdPath = '/gestionstock/v1/ventes/{id}';

  /**
   * Rechercher une vente par ID.
   *
   * Cette méthode permet de chercher une vente par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: FindById$Params, context?: HttpContext): Observable<StrictHttpResponse<SaleDto>> {
    return findById(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher une vente par ID.
   *
   * Cette méthode permet de chercher une vente par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: FindById$Params, context?: HttpContext): Observable<SaleDto> {
    return this.findById$Response(params, context).pipe(
      map((r: StrictHttpResponse<SaleDto>): SaleDto => r.body)
    );
  }

  /** Path part for operation `findByCode()` */
  static readonly FindByCodePath = '/gestionstock/v1/ventes/code/{code}';

  /**
   * Rechercher une vente par code.
   *
   * Cette méthode permet de chercher une vente par son code
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode$Response(params: FindByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<SaleDto>> {
    return findByCode(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher une vente par code.
   *
   * Cette méthode permet de chercher une vente par son code
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode(params: FindByCode$Params, context?: HttpContext): Observable<SaleDto> {
    return this.findByCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<SaleDto>): SaleDto => r.body)
    );
  }

  /** Path part for operation `findAll()` */
  static readonly FindAllPath = '/gestionstock/v1/ventes/all';

  /**
   * Lister toutes les ventes.
   *
   * Cette méthode permet de lister toutes les ventes enregistrées dans la base de données
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll$Response(params?: FindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<SaleDto>> {
    return findAll(this.http, this.rootUrl, params, context);
  }

  /**
   * Lister toutes les ventes.
   *
   * Cette méthode permet de lister toutes les ventes enregistrées dans la base de données
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll(params?: FindAll$Params, context?: HttpContext): Observable<SaleDto> {
    return this.findAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<SaleDto>): SaleDto => r.body)
    );
  }

  /** Path part for operation `delete()` */
  static readonly DeletePath = '/gestionstock/v1/ventes/delete/{id}';

  /**
   * Supprimer une vente.
   *
   * Cette méthode permet de supprimer une vente par ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: Delete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete$(this.http, this.rootUrl, params, context);
  }

  /**
   * Supprimer une vente.
   *
   * Cette méthode permet de supprimer une vente par ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: Delete$Params, context?: HttpContext): Observable<void> {
    return this.delete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
