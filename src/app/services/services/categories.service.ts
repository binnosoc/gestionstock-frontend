/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CategoryDto } from '../models/category-dto';
import { findAllByCompanyId } from '../fn/categories/find-all-by-company-id';
import { FindAllByCompanyId$Params } from '../fn/categories/find-all-by-company-id';
import { findByCode2 } from '../fn/categories/find-by-code-2';
import { FindByCode2$Params } from '../fn/categories/find-by-code-2';
import { findById7 } from '../fn/categories/find-by-id-7';
import { FindById7$Params } from '../fn/categories/find-by-id-7';
import { save7 } from '../fn/categories/save-7';
import { Save7$Params } from '../fn/categories/save-7';

@Injectable({ providedIn: 'root' })
export class CategoriesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save7()` */
  static readonly Save7Path = '/gestionstock/v1/categories/create';

  /**
   * Enregistrer une catégorie.
   *
   * Cette méthode permet d'enregistrer ou modifier une catégorie d'catégorie
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save7()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save7$Response(params: Save7$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return save7(this.http, this.rootUrl, params, context);
  }

  /**
   * Enregistrer une catégorie.
   *
   * Cette méthode permet d'enregistrer ou modifier une catégorie d'catégorie
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save7$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save7(params: Save7$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.save7$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `findById7()` */
  static readonly FindById7Path = '/gestionstock/v1/categories/search/{idCategory}';

  /**
   * Rechercher une catégorie par son ID.
   *
   * Cette méthode permet de chercher un catégorie par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById7()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById7$Response(params: FindById7$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return findById7(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher une catégorie par son ID.
   *
   * Cette méthode permet de chercher un catégorie par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById7$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById7(params: FindById7$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.findById7$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `findByCode2()` */
  static readonly FindByCode2Path = '/gestionstock/v1/categories/search/code/{code}';

  /**
   * Rechercher une catégorie par son code.
   *
   * Cette méthode permet de chercher un catégorie par son code
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCode2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode2$Response(params: FindByCode2$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return findByCode2(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher une catégorie par son code.
   *
   * Cette méthode permet de chercher un catégorie par son code
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCode2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode2(params: FindByCode2$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.findByCode2$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

  /** Path part for operation `findAllByCompanyId()` */
  static readonly FindAllByCompanyIdPath = '/gestionstock/v1/categories/all/{idCompany}';

  /**
   * Trouver la liste des catégories d'article.
   *
   * Cette méthode permet de trouver la liste des catégories des articles  pour entreprise
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllByCompanyId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByCompanyId$Response(params: FindAllByCompanyId$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
    return findAllByCompanyId(this.http, this.rootUrl, params, context);
  }

  /**
   * Trouver la liste des catégories d'article.
   *
   * Cette méthode permet de trouver la liste des catégories des articles  pour entreprise
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllByCompanyId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByCompanyId(params: FindAllByCompanyId$Params, context?: HttpContext): Observable<CategoryDto> {
    return this.findAllByCompanyId$Response(params, context).pipe(
      map((r: StrictHttpResponse<CategoryDto>): CategoryDto => r.body)
    );
  }

}
