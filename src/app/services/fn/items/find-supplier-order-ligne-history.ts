/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ItemDto } from '../../models/item-dto';

export interface FindSupplierOrderLigneHistory$Params {
  idItem: number;
}

export function findSupplierOrderLigneHistory(http: HttpClient, rootUrl: string, params: FindSupplierOrderLigneHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ItemDto>> {
  const rb = new RequestBuilder(rootUrl, findSupplierOrderLigneHistory.PATH, 'get');
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

findSupplierOrderLigneHistory.PATH = '/gestionstock/v1/items/historique/commandefournisseur/{idItem}';
