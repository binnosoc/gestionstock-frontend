/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ItemDto } from '../../models/item-dto';

export interface FindSaleHistory$Params {
  idItem: number;
}

export function findSaleHistory(http: HttpClient, rootUrl: string, params: FindSaleHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ItemDto>> {
  const rb = new RequestBuilder(rootUrl, findSaleHistory.PATH, 'get');
  if (params) {
    rb.path('idItem', params.idItem, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ItemDto>;
    })
  );
}

findSaleHistory.PATH = '/gestionstock/v1/items/historique/vente/{idItem}';
