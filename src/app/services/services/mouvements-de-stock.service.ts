/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { correctionStockNeg } from '../fn/mouvements-de-stock/correction-stock-neg';
import { CorrectionStockNeg$Params } from '../fn/mouvements-de-stock/correction-stock-neg';
import { correctionStockPos } from '../fn/mouvements-de-stock/correction-stock-pos';
import { CorrectionStockPos$Params } from '../fn/mouvements-de-stock/correction-stock-pos';
import { entreeStock } from '../fn/mouvements-de-stock/entree-stock';
import { EntreeStock$Params } from '../fn/mouvements-de-stock/entree-stock';
import { sortieStock } from '../fn/mouvements-de-stock/sortie-stock';
import { SortieStock$Params } from '../fn/mouvements-de-stock/sortie-stock';
import { StockMovementDto } from '../models/stock-movement-dto';
import { stockMovementItem } from '../fn/mouvements-de-stock/stock-movement-item';
import { StockMovementItem$Params } from '../fn/mouvements-de-stock/stock-movement-item';
import { stockReelItem } from '../fn/mouvements-de-stock/stock-reel-item';
import { StockReelItem$Params } from '../fn/mouvements-de-stock/stock-reel-item';

@Injectable({ providedIn: 'root' })
export class MouvementsDeStockService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `sortieStock()` */
  static readonly SortieStockPath = '/gestionstock/v1/mouvements/sortie';

  /**
   * Enregistrer une sortie de stock.
   *
   * Cette méthode permet d'enregistrer une sortie de stock pour un article
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sortieStock()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sortieStock$Response(params: SortieStock$Params, context?: HttpContext): Observable<StrictHttpResponse<StockMovementDto>> {
    return sortieStock(this.http, this.rootUrl, params, context);
  }

  /**
   * Enregistrer une sortie de stock.
   *
   * Cette méthode permet d'enregistrer une sortie de stock pour un article
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sortieStock$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sortieStock(params: SortieStock$Params, context?: HttpContext): Observable<StockMovementDto> {
    return this.sortieStock$Response(params, context).pipe(
      map((r: StrictHttpResponse<StockMovementDto>): StockMovementDto => r.body)
    );
  }

  /** Path part for operation `entreeStock()` */
  static readonly EntreeStockPath = '/gestionstock/v1/mouvements/entree';

  /**
   * Enregistrer une entrée de stock.
   *
   * Cette méthode permet d'enregistrer une entrée de stock pour un article
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `entreeStock()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  entreeStock$Response(params: EntreeStock$Params, context?: HttpContext): Observable<StrictHttpResponse<StockMovementDto>> {
    return entreeStock(this.http, this.rootUrl, params, context);
  }

  /**
   * Enregistrer une entrée de stock.
   *
   * Cette méthode permet d'enregistrer une entrée de stock pour un article
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `entreeStock$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  entreeStock(params: EntreeStock$Params, context?: HttpContext): Observable<StockMovementDto> {
    return this.entreeStock$Response(params, context).pipe(
      map((r: StrictHttpResponse<StockMovementDto>): StockMovementDto => r.body)
    );
  }

  /** Path part for operation `correctionStockPos()` */
  static readonly CorrectionStockPosPath = '/gestionstock/v1/mouvements/correctionPos';

  /**
   * Corriger le stock en positif.
   *
   * Cette méthode permet de corriger le stock en augmentant la quantité pour un article donné
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `correctionStockPos()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  correctionStockPos$Response(params: CorrectionStockPos$Params, context?: HttpContext): Observable<StrictHttpResponse<StockMovementDto>> {
    return correctionStockPos(this.http, this.rootUrl, params, context);
  }

  /**
   * Corriger le stock en positif.
   *
   * Cette méthode permet de corriger le stock en augmentant la quantité pour un article donné
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `correctionStockPos$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  correctionStockPos(params: CorrectionStockPos$Params, context?: HttpContext): Observable<StockMovementDto> {
    return this.correctionStockPos$Response(params, context).pipe(
      map((r: StrictHttpResponse<StockMovementDto>): StockMovementDto => r.body)
    );
  }

  /** Path part for operation `correctionStockNeg()` */
  static readonly CorrectionStockNegPath = '/gestionstock/v1/mouvements/correctionNeg';

  /**
   * Corriger le stock en négatif.
   *
   * Cette méthode permet de corriger le stock en diminuant la quantité pour un article donné
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `correctionStockNeg()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  correctionStockNeg$Response(params: CorrectionStockNeg$Params, context?: HttpContext): Observable<StrictHttpResponse<StockMovementDto>> {
    return correctionStockNeg(this.http, this.rootUrl, params, context);
  }

  /**
   * Corriger le stock en négatif.
   *
   * Cette méthode permet de corriger le stock en diminuant la quantité pour un article donné
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `correctionStockNeg$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  correctionStockNeg(params: CorrectionStockNeg$Params, context?: HttpContext): Observable<StockMovementDto> {
    return this.correctionStockNeg$Response(params, context).pipe(
      map((r: StrictHttpResponse<StockMovementDto>): StockMovementDto => r.body)
    );
  }

  /** Path part for operation `stockMovementItem()` */
  static readonly StockMovementItemPath = '/gestionstock/v1/mouvements/{itemID}';

  /**
   * Lister les mouvements de stock d'un article.
   *
   * Cette méthode permet de lister tous les mouvements de stock pour un article donné en utilisant son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `stockMovementItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  stockMovementItem$Response(params: StockMovementItem$Params, context?: HttpContext): Observable<StrictHttpResponse<StockMovementDto>> {
    return stockMovementItem(this.http, this.rootUrl, params, context);
  }

  /**
   * Lister les mouvements de stock d'un article.
   *
   * Cette méthode permet de lister tous les mouvements de stock pour un article donné en utilisant son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `stockMovementItem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  stockMovementItem(params: StockMovementItem$Params, context?: HttpContext): Observable<StockMovementDto> {
    return this.stockMovementItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<StockMovementDto>): StockMovementDto => r.body)
    );
  }

  /** Path part for operation `stockReelItem()` */
  static readonly StockReelItemPath = '/gestionstock/v1/mouvements/stockreel/{itemID}';

  /**
   * Calculer le stock réel d'un article.
   *
   * Cette méthode permet de calculer le stock réel d'un article donné en utilisant son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `stockReelItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  stockReelItem$Response(params: StockReelItem$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return stockReelItem(this.http, this.rootUrl, params, context);
  }

  /**
   * Calculer le stock réel d'un article.
   *
   * Cette méthode permet de calculer le stock réel d'un article donné en utilisant son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `stockReelItem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  stockReelItem(params: StockReelItem$Params, context?: HttpContext): Observable<number> {
    return this.stockReelItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
