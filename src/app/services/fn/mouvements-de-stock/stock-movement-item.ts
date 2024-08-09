/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StockMovementDto } from '../../models/stock-movement-dto';

export interface StockMovementItem$Params {
  itemID: number;
}

export function stockMovementItem(http: HttpClient, rootUrl: string, params: StockMovementItem$Params, context?: HttpContext): Observable<StrictHttpResponse<StockMovementDto>> {
  const rb = new RequestBuilder(rootUrl, stockMovementItem.PATH, 'get');
  if (params) {
    rb.path('itemID', params.itemID, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StockMovementDto>;
    })
  );
}

stockMovementItem.PATH = '/gestionstock/v1/mouvements/{itemID}';
