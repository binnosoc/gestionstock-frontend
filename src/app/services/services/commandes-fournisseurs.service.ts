/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete3 } from '../fn/commandes-fournisseurs/delete-3';
import { Delete3$Params } from '../fn/commandes-fournisseurs/delete-3';
import { deleteItem } from '../fn/commandes-fournisseurs/delete-item';
import { DeleteItem$Params } from '../fn/commandes-fournisseurs/delete-item';
import { findAll3 } from '../fn/commandes-fournisseurs/find-all-3';
import { FindAll3$Params } from '../fn/commandes-fournisseurs/find-all-3';
import { findAllSupplierOrderLigneBySupplierOrderId } from '../fn/commandes-fournisseurs/find-all-supplier-order-ligne-by-supplier-order-id';
import { FindAllSupplierOrderLigneBySupplierOrderId$Params } from '../fn/commandes-fournisseurs/find-all-supplier-order-ligne-by-supplier-order-id';
import { findById4 } from '../fn/commandes-fournisseurs/find-by-id-4';
import { FindById4$Params } from '../fn/commandes-fournisseurs/find-by-id-4';
import { save4 } from '../fn/commandes-fournisseurs/save-4';
import { Save4$Params } from '../fn/commandes-fournisseurs/save-4';
import { SupplierOrderDto } from '../models/supplier-order-dto';
import { SupplierOrderLigneDto } from '../models/supplier-order-ligne-dto';
import { updateItem } from '../fn/commandes-fournisseurs/update-item';
import { UpdateItem$Params } from '../fn/commandes-fournisseurs/update-item';
import { updateOrderQuantity } from '../fn/commandes-fournisseurs/update-order-quantity';
import { UpdateOrderQuantity$Params } from '../fn/commandes-fournisseurs/update-order-quantity';
import { updateOrderStatus } from '../fn/commandes-fournisseurs/update-order-status';
import { UpdateOrderStatus$Params } from '../fn/commandes-fournisseurs/update-order-status';
import { updateSupplier } from '../fn/commandes-fournisseurs/update-supplier';
import { UpdateSupplier$Params } from '../fn/commandes-fournisseurs/update-supplier';

@Injectable({ providedIn: 'root' })
export class CommandesFournisseursService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `save4()` */
  static readonly Save4Path = '/gestionstock/v1/commandfournisseurs/create';

  /**
   * Enregistrer une commande fournisseur.
   *
   * Cette méthode permet d'enregistrer ou de modifier une commande fournisseur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save4()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save4$Response(params: Save4$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierOrderDto>> {
    return save4(this.http, this.rootUrl, params, context);
  }

  /**
   * Enregistrer une commande fournisseur.
   *
   * Cette méthode permet d'enregistrer ou de modifier une commande fournisseur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save4$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save4(params: Save4$Params, context?: HttpContext): Observable<SupplierOrderDto> {
    return this.save4$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupplierOrderDto>): SupplierOrderDto => r.body)
    );
  }

  /** Path part for operation `updateSupplier()` */
  static readonly UpdateSupplierPath = '/gestionstock/v1/commandfournisseurs/update/supplier/{idSupplierOrder}/{idSupplier}';

  /**
   * Mettre à jour le fournisseur d'une commande.
   *
   * Cette méthode permet de mettre à jour les informations du fournisseur d'une commande via l'ID de la commande et l'ID du fournisseur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSupplier()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateSupplier$Response(params: UpdateSupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierOrderDto>> {
    return updateSupplier(this.http, this.rootUrl, params, context);
  }

  /**
   * Mettre à jour le fournisseur d'une commande.
   *
   * Cette méthode permet de mettre à jour les informations du fournisseur d'une commande via l'ID de la commande et l'ID du fournisseur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateSupplier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateSupplier(params: UpdateSupplier$Params, context?: HttpContext): Observable<SupplierOrderDto> {
    return this.updateSupplier$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupplierOrderDto>): SupplierOrderDto => r.body)
    );
  }

  /** Path part for operation `updateOrderStatus()` */
  static readonly UpdateOrderStatusPath = '/gestionstock/v1/commandfournisseurs/update/status/{idSupplierOrder}/{orderStatus}';

  /**
   * Mettre à jour le statut d'une commande fournisseur.
   *
   * Cette méthode permet de mettre à jour le statut d'une commande fournisseur via l'ID de la commande et le statut
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOrderStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateOrderStatus$Response(params: UpdateOrderStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierOrderDto>> {
    return updateOrderStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * Mettre à jour le statut d'une commande fournisseur.
   *
   * Cette méthode permet de mettre à jour le statut d'une commande fournisseur via l'ID de la commande et le statut
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateOrderStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateOrderStatus(params: UpdateOrderStatus$Params, context?: HttpContext): Observable<SupplierOrderDto> {
    return this.updateOrderStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupplierOrderDto>): SupplierOrderDto => r.body)
    );
  }

  /** Path part for operation `updateOrderQuantity()` */
  static readonly UpdateOrderQuantityPath = '/gestionstock/v1/commandfournisseurs/update/quantity/{idSupplierOrder}/{idOrderLine}/{quantity}';

  /**
   * Mettre à jour la quantité d'une commande fournisseur.
   *
   * Cette méthode permet de mettre à jour la quantité d'une commande fournisseur via l'ID de la commande, l'ID de la ligne de commande et la quantité
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOrderQuantity()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateOrderQuantity$Response(params: UpdateOrderQuantity$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierOrderDto>> {
    return updateOrderQuantity(this.http, this.rootUrl, params, context);
  }

  /**
   * Mettre à jour la quantité d'une commande fournisseur.
   *
   * Cette méthode permet de mettre à jour la quantité d'une commande fournisseur via l'ID de la commande, l'ID de la ligne de commande et la quantité
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateOrderQuantity$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateOrderQuantity(params: UpdateOrderQuantity$Params, context?: HttpContext): Observable<SupplierOrderDto> {
    return this.updateOrderQuantity$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupplierOrderDto>): SupplierOrderDto => r.body)
    );
  }

  /** Path part for operation `updateItem()` */
  static readonly UpdateItemPath = '/gestionstock/v1/commandfournisseurs/update/item/{idSupplierOrder}/{idOrderLine}/{itemId}';

  /**
   * Mettre à jour un article d'une commande fournisseur.
   *
   * Cette méthode permet de mettre à jour un article d'une commande via l'ID de la commande, l'ID de la ligne de commande et l'ID de l'article
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateItem$Response(params: UpdateItem$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierOrderDto>> {
    return updateItem(this.http, this.rootUrl, params, context);
  }

  /**
   * Mettre à jour un article d'une commande fournisseur.
   *
   * Cette méthode permet de mettre à jour un article d'une commande via l'ID de la commande, l'ID de la ligne de commande et l'ID de l'article
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateItem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateItem(params: UpdateItem$Params, context?: HttpContext): Observable<SupplierOrderDto> {
    return this.updateItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupplierOrderDto>): SupplierOrderDto => r.body)
    );
  }

  /** Path part for operation `findAllSupplierOrderLigneBySupplierOrderId()` */
  static readonly FindAllSupplierOrderLigneBySupplierOrderIdPath = '/gestionstock/v1/commandfournisseurs/orderlines/{idSupplierOrder}';

  /**
   * Lister toutes les lignes de commandes d'une commande fournisseur.
   *
   * Cette méthode permet de lister toutes les lignes de commandes d'une commande fournisseur via l'ID de la commande
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllSupplierOrderLigneBySupplierOrderId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllSupplierOrderLigneBySupplierOrderId$Response(params: FindAllSupplierOrderLigneBySupplierOrderId$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierOrderLigneDto>> {
    return findAllSupplierOrderLigneBySupplierOrderId(this.http, this.rootUrl, params, context);
  }

  /**
   * Lister toutes les lignes de commandes d'une commande fournisseur.
   *
   * Cette méthode permet de lister toutes les lignes de commandes d'une commande fournisseur via l'ID de la commande
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllSupplierOrderLigneBySupplierOrderId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllSupplierOrderLigneBySupplierOrderId(params: FindAllSupplierOrderLigneBySupplierOrderId$Params, context?: HttpContext): Observable<SupplierOrderLigneDto> {
    return this.findAllSupplierOrderLigneBySupplierOrderId$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupplierOrderLigneDto>): SupplierOrderLigneDto => r.body)
    );
  }

  /** Path part for operation `findById4()` */
  static readonly FindById4Path = '/gestionstock/v1/commandfournisseurs/find/{id}';

  /**
   * Rechercher une commande fournisseur par ID.
   *
   * Cette méthode permet de chercher une commande fournisseur par ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById4()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4$Response(params: FindById4$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierOrderDto>> {
    return findById4(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher une commande fournisseur par ID.
   *
   * Cette méthode permet de chercher une commande fournisseur par ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById4(params: FindById4$Params, context?: HttpContext): Observable<SupplierOrderDto> {
    return this.findById4$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupplierOrderDto>): SupplierOrderDto => r.body)
    );
  }

  /** Path part for operation `findAll3()` */
  static readonly FindAll3Path = '/gestionstock/v1/commandfournisseurs/all';

  /**
   * Lister toutes les commandes fournisseurs.
   *
   * Cette méthode permet de lister toutes les commandes fournisseurs
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll3$Response(params?: FindAll3$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierOrderDto>> {
    return findAll3(this.http, this.rootUrl, params, context);
  }

  /**
   * Lister toutes les commandes fournisseurs.
   *
   * Cette méthode permet de lister toutes les commandes fournisseurs
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll3(params?: FindAll3$Params, context?: HttpContext): Observable<SupplierOrderDto> {
    return this.findAll3$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupplierOrderDto>): SupplierOrderDto => r.body)
    );
  }

  /** Path part for operation `delete3()` */
  static readonly Delete3Path = '/gestionstock/v1/commandfournisseurs/delete/{id}';

  /**
   * Supprimer une commande fournisseur.
   *
   * Cette méthode permet de supprimer une commande fournisseur par ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete3()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete3$Response(params: Delete3$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete3(this.http, this.rootUrl, params, context);
  }

  /**
   * Supprimer une commande fournisseur.
   *
   * Cette méthode permet de supprimer une commande fournisseur par ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete3(params: Delete3$Params, context?: HttpContext): Observable<void> {
    return this.delete3$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteItem()` */
  static readonly DeleteItemPath = '/gestionstock/v1/commandfournisseurs/delete/item/{idSupplierOrder}/{idOrderLine}';

  /**
   * Supprimer un article d'une commande fournisseur.
   *
   * Cette méthode permet de supprimer un article d'une commande fournisseur via l'ID de la commande et l'ID de la ligne de commande
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItem$Response(params: DeleteItem$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierOrderDto>> {
    return deleteItem(this.http, this.rootUrl, params, context);
  }

  /**
   * Supprimer un article d'une commande fournisseur.
   *
   * Cette méthode permet de supprimer un article d'une commande fournisseur via l'ID de la commande et l'ID de la ligne de commande
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItem(params: DeleteItem$Params, context?: HttpContext): Observable<SupplierOrderDto> {
    return this.deleteItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<SupplierOrderDto>): SupplierOrderDto => r.body)
    );
  }

}
