/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete1 } from '../fn/items/delete-1';
import { Delete1$Params } from '../fn/items/delete-1';
import { findAll1 } from '../fn/items/find-all-1';
import { FindAll1$Params } from '../fn/items/find-all-1';
import { findAllItemByCategoryId } from '../fn/items/find-all-item-by-category-id';
import { FindAllItemByCategoryId$Params } from '../fn/items/find-all-item-by-category-id';
import { findByCode1 } from '../fn/items/find-by-code-1';
import { FindByCode1$Params } from '../fn/items/find-by-code-1';
import { findById1 } from '../fn/items/find-by-id-1';
import { FindById1$Params } from '../fn/items/find-by-id-1';
import { findCustomerOrderLigneHistory } from '../fn/items/find-customer-order-ligne-history';
import { FindCustomerOrderLigneHistory$Params } from '../fn/items/find-customer-order-ligne-history';
import { findSaleHistory } from '../fn/items/find-sale-history';
import { FindSaleHistory$Params } from '../fn/items/find-sale-history';
import { findSupplierOrderLigneHistory } from '../fn/items/find-supplier-order-ligne-history';
import { FindSupplierOrderLigneHistory$Params } from '../fn/items/find-supplier-order-ligne-history';
import { ItemDto } from '../models/item-dto';
import { save1 } from '../fn/items/save-1';
import { Save1$Params } from '../fn/items/save-1';

@Injectable({ providedIn: 'root' })
export class ItemsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save1()` */
  static readonly Save1Path = '/gestionstock/v1/items/create';

  /**
   * Enregistrer un article.
   *
   * Cette méthode permet d'enregistrer ou modifier un article
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save1$Response(params: Save1$Params, context?: HttpContext): Observable<StrictHttpResponse<ItemDto>> {
    return save1(this.http, this.rootUrl, params, context);
  }

  /**
   * Enregistrer un article.
   *
   * Cette méthode permet d'enregistrer ou modifier un article
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save1(params: Save1$Params, context?: HttpContext): Observable<ItemDto> {
    return this.save1$Response(params, context).pipe(
      map((r: StrictHttpResponse<ItemDto>): ItemDto => r.body)
    );
  }

  /** Path part for operation `findById1()` */
  static readonly FindById1Path = '/gestionstock/v1/items/search/{idItem}';

  /**
   * Rechercher un article par son ID.
   *
   * Cette méthode permet de chercher un article par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1$Response(params: FindById1$Params, context?: HttpContext): Observable<StrictHttpResponse<ItemDto>> {
    return findById1(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher un article par son ID.
   *
   * Cette méthode permet de chercher un article par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1(params: FindById1$Params, context?: HttpContext): Observable<ItemDto> {
    return this.findById1$Response(params, context).pipe(
      map((r: StrictHttpResponse<ItemDto>): ItemDto => r.body)
    );
  }

  /** Path part for operation `findSaleHistory()` */
  static readonly FindSaleHistoryPath = '/gestionstock/v1/items/historique/vente/{idItem}';

  /**
   * Renvoi la liste des lignes de ventes pour un article donné.
   *
   * Cette méthode permet de chercher et renvoyer la liste des lignes de ventes qui ont été effectuées pour un article donné
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findSaleHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  findSaleHistory$Response(params: FindSaleHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ItemDto>> {
    return findSaleHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * Renvoi la liste des lignes de ventes pour un article donné.
   *
   * Cette méthode permet de chercher et renvoyer la liste des lignes de ventes qui ont été effectuées pour un article donné
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findSaleHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findSaleHistory(params: FindSaleHistory$Params, context?: HttpContext): Observable<ItemDto> {
    return this.findSaleHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<ItemDto>): ItemDto => r.body)
    );
  }

  /** Path part for operation `findSupplierOrderLigneHistory()` */
  static readonly FindSupplierOrderLigneHistoryPath = '/gestionstock/v1/items/historique/commandefournisseur/{idItem}';

  /**
   * Renvoi la liste des lignes de commandes fournisseur pour un article donné.
   *
   * Cette méthode permet de chercher et renvoyer la liste des lignes de commandes fournisseur qui ont été effectuées pour un article donné
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findSupplierOrderLigneHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  findSupplierOrderLigneHistory$Response(params: FindSupplierOrderLigneHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ItemDto>> {
    return findSupplierOrderLigneHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * Renvoi la liste des lignes de commandes fournisseur pour un article donné.
   *
   * Cette méthode permet de chercher et renvoyer la liste des lignes de commandes fournisseur qui ont été effectuées pour un article donné
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findSupplierOrderLigneHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findSupplierOrderLigneHistory(params: FindSupplierOrderLigneHistory$Params, context?: HttpContext): Observable<ItemDto> {
    return this.findSupplierOrderLigneHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<ItemDto>): ItemDto => r.body)
    );
  }

  /** Path part for operation `findCustomerOrderLigneHistory()` */
  static readonly FindCustomerOrderLigneHistoryPath = '/gestionstock/v1/items/historique/commandeclient/{idItem}';

  /**
   * Renvoi la liste des lignes de commandes client pour un article donné.
   *
   * Cette méthode permet de chercher et renvoyer la liste des lignes de commandes client qui ont été effectuées pour un article donné
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findCustomerOrderLigneHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  findCustomerOrderLigneHistory$Response(params: FindCustomerOrderLigneHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ItemDto>> {
    return findCustomerOrderLigneHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * Renvoi la liste des lignes de commandes client pour un article donné.
   *
   * Cette méthode permet de chercher et renvoyer la liste des lignes de commandes client qui ont été effectuées pour un article donné
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findCustomerOrderLigneHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findCustomerOrderLigneHistory(params: FindCustomerOrderLigneHistory$Params, context?: HttpContext): Observable<ItemDto> {
    return this.findCustomerOrderLigneHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<ItemDto>): ItemDto => r.body)
    );
  }

  /** Path part for operation `findByCode1()` */
  static readonly FindByCode1Path = '/gestionstock/v1/items/filter/{codeItem}';

  /**
   * Rechercher un article par CODE.
   *
   * Cette méthode permet de chercher un article par son CODE
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCode1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode1$Response(params: FindByCode1$Params, context?: HttpContext): Observable<StrictHttpResponse<ItemDto>> {
    return findByCode1(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher un article par CODE.
   *
   * Cette méthode permet de chercher un article par son CODE
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCode1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCode1(params: FindByCode1$Params, context?: HttpContext): Observable<ItemDto> {
    return this.findByCode1$Response(params, context).pipe(
      map((r: StrictHttpResponse<ItemDto>): ItemDto => r.body)
    );
  }

  /** Path part for operation `findAllItemByCategoryId()` */
  static readonly FindAllItemByCategoryIdPath = '/gestionstock/v1/items/filter/category/{idCategory}';

  /**
   * Renvoi la liste des articles par catégorie.
   *
   * Cette méthode permet de chercher et renvoyer la liste des articles par l'ID d'une catégori donné
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllItemByCategoryId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllItemByCategoryId$Response(params: FindAllItemByCategoryId$Params, context?: HttpContext): Observable<StrictHttpResponse<ItemDto>> {
    return findAllItemByCategoryId(this.http, this.rootUrl, params, context);
  }

  /**
   * Renvoi la liste des articles par catégorie.
   *
   * Cette méthode permet de chercher et renvoyer la liste des articles par l'ID d'une catégori donné
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllItemByCategoryId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllItemByCategoryId(params: FindAllItemByCategoryId$Params, context?: HttpContext): Observable<ItemDto> {
    return this.findAllItemByCategoryId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ItemDto>): ItemDto => r.body)
    );
  }

  /** Path part for operation `findAll1()` */
  static readonly FindAll1Path = '/gestionstock/v1/items/all';

  /**
   * Renvoi la liste des articles.
   *
   * Cette méthode permet de chercher et renvoyer la liste des articles qui existent dans la base de données
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1$Response(params?: FindAll1$Params, context?: HttpContext): Observable<StrictHttpResponse<ItemDto>> {
    return findAll1(this.http, this.rootUrl, params, context);
  }

  /**
   * Renvoi la liste des articles.
   *
   * Cette méthode permet de chercher et renvoyer la liste des articles qui existent dans la base de données
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1(params?: FindAll1$Params, context?: HttpContext): Observable<ItemDto> {
    return this.findAll1$Response(params, context).pipe(
      map((r: StrictHttpResponse<ItemDto>): ItemDto => r.body)
    );
  }

  /** Path part for operation `delete1()` */
  static readonly Delete1Path = '/gestionstock/v1/items/delete/{idItem}';

  /**
   * Supprimer un article.
   *
   * Cette méthode permet de supprimer un article par ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1$Response(params: Delete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete1(this.http, this.rootUrl, params, context);
  }

  /**
   * Supprimer un article.
   *
   * Cette méthode permet de supprimer un article par ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1(params: Delete1$Params, context?: HttpContext): Observable<void> {
    return this.delete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
