/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CustomerOrderDto } from '../models/customer-order-dto';
import { delete4 } from '../fn/commandes-clients/delete-4';
import { Delete4$Params } from '../fn/commandes-clients/delete-4';
import { findAllByCustomerOrderId } from '../fn/commandes-clients/find-all-by-customer-order-id';
import { FindAllByCustomerOrderId$Params } from '../fn/commandes-clients/find-all-by-customer-order-id';
import { findById5 } from '../fn/commandes-clients/find-by-id-5';
import { FindById5$Params } from '../fn/commandes-clients/find-by-id-5';
import { save5 } from '../fn/commandes-clients/save-5';
import { Save5$Params } from '../fn/commandes-clients/save-5';
import { updateCustomer } from '../fn/commandes-clients/update-customer';
import { UpdateCustomer$Params } from '../fn/commandes-clients/update-customer';
import { updateItem1 } from '../fn/commandes-clients/update-item-1';
import { UpdateItem1$Params } from '../fn/commandes-clients/update-item-1';
import { updateOrderQuantity1 } from '../fn/commandes-clients/update-order-quantity-1';
import { UpdateOrderQuantity1$Params } from '../fn/commandes-clients/update-order-quantity-1';

@Injectable({ providedIn: 'root' })
export class CommandesClientsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save5()` */
  static readonly Save5Path = '/gestionstock/v1/commandclients/create';

  /**
   * Enregistrer une client.
   *
   * Cette méthode permet d'enregistrer ou modifier un client
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save5()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save5$Response(params: Save5$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerOrderDto>> {
    return save5(this.http, this.rootUrl, params, context);
  }

  /**
   * Enregistrer une client.
   *
   * Cette méthode permet d'enregistrer ou modifier un client
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save5$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save5(params: Save5$Params, context?: HttpContext): Observable<CustomerOrderDto> {
    return this.save5$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerOrderDto>): CustomerOrderDto => r.body)
    );
  }

  /** Path part for operation `updateOrderQuantity1()` */
  static readonly UpdateOrderQuantity1Path = '/gestionstock/v1/commandclients/update/{idCustomerOrder}/{orderLigneID}/{quantity}';

  /**
   * Mettre à jour la quantité d'une commande client.
   *
   * Cette méthode permet de mettre à jour la quantité d'une commande client via l'ID de la commande, l'ID de la ligne de commande et la quantité
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOrderQuantity1()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateOrderQuantity1$Response(params: UpdateOrderQuantity1$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerOrderDto>> {
    return updateOrderQuantity1(this.http, this.rootUrl, params, context);
  }

  /**
   * Mettre à jour la quantité d'une commande client.
   *
   * Cette méthode permet de mettre à jour la quantité d'une commande client via l'ID de la commande, l'ID de la ligne de commande et la quantité
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateOrderQuantity1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateOrderQuantity1(params: UpdateOrderQuantity1$Params, context?: HttpContext): Observable<CustomerOrderDto> {
    return this.updateOrderQuantity1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerOrderDto>): CustomerOrderDto => r.body)
    );
  }

  /** Path part for operation `updateItem1()` */
  static readonly UpdateItem1Path = '/gestionstock/v1/commandclients/update/clients/{idCustomerOrder}/{idItem}';

  /**
   * Mettre à jour l'article d'une commande client.
   *
   * Cette méthode permet de mettre à jour l'article d'une commande client via l'ID de la commande et l'ID de l'article
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateItem1()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateItem1$Response(params: UpdateItem1$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerOrderDto>> {
    return updateItem1(this.http, this.rootUrl, params, context);
  }

  /**
   * Mettre à jour l'article d'une commande client.
   *
   * Cette méthode permet de mettre à jour l'article d'une commande client via l'ID de la commande et l'ID de l'article
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateItem1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateItem1(params: UpdateItem1$Params, context?: HttpContext): Observable<CustomerOrderDto> {
    return this.updateItem1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerOrderDto>): CustomerOrderDto => r.body)
    );
  }

  /** Path part for operation `updateCustomer()` */
  static readonly UpdateCustomerPath = '/gestionstock/v1/commandclients/update/clients/{idCustomerOrder}/{idCustomer}';

  /**
   * Mettre à jour les infos du client d'une commande client.
   *
   * Cette méthode permet de mettre à jour les infos du client d'une commande client via l'ID de la commande, l'ID de la ligne du client
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCustomer()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateCustomer$Response(params: UpdateCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerOrderDto>> {
    return updateCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * Mettre à jour les infos du client d'une commande client.
   *
   * Cette méthode permet de mettre à jour les infos du client d'une commande client via l'ID de la commande, l'ID de la ligne du client
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCustomer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateCustomer(params: UpdateCustomer$Params, context?: HttpContext): Observable<CustomerOrderDto> {
    return this.updateCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerOrderDto>): CustomerOrderDto => r.body)
    );
  }

  /** Path part for operation `findById5()` */
  static readonly FindById5Path = '/gestionstock/v1/commandclients/search/{idCustomerOrder}';

  /**
   * Rechercher une client par son ID.
   *
   * Cette méthode permet de chercher un client par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById5()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById5$Response(params: FindById5$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerOrderDto>> {
    return findById5(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher une client par son ID.
   *
   * Cette méthode permet de chercher un client par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById5(params: FindById5$Params, context?: HttpContext): Observable<CustomerOrderDto> {
    return this.findById5$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerOrderDto>): CustomerOrderDto => r.body)
    );
  }

  /** Path part for operation `findAllByCustomerOrderId()` */
  static readonly FindAllByCustomerOrderIdPath = '/gestionstock/v1/commandclients/allByClient/{idCustomer}';

  /**
   * Trouver la liste des commandes clients .
   *
   * Cette méthode permet de trouver la liste des commandes clients
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllByCustomerOrderId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByCustomerOrderId$Response(params: FindAllByCustomerOrderId$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerOrderDto>> {
    return findAllByCustomerOrderId(this.http, this.rootUrl, params, context);
  }

  /**
   * Trouver la liste des commandes clients .
   *
   * Cette méthode permet de trouver la liste des commandes clients
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllByCustomerOrderId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByCustomerOrderId(params: FindAllByCustomerOrderId$Params, context?: HttpContext): Observable<CustomerOrderDto> {
    return this.findAllByCustomerOrderId$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerOrderDto>): CustomerOrderDto => r.body)
    );
  }

  /** Path part for operation `delete4()` */
  static readonly Delete4Path = '/gestionstock/v1/commandclients/delete/{idCustomerOrder}';

  /**
   * Supprimer un client.
   *
   * Cette méthode permet de supprimer un client par ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete4()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete4$Response(params: Delete4$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete4(this.http, this.rootUrl, params, context);
  }

  /**
   * Supprimer un client.
   *
   * Cette méthode permet de supprimer un client par ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete4(params: Delete4$Params, context?: HttpContext): Observable<void> {
    return this.delete4$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
