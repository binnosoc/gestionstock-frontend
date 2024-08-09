/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StockMovementDto } from '../../models/stock-movement-dto';

export interface SortieStock$Params {
      body: StockMovementDto
}

export function sortieStock(http: HttpClient, rootUrl: string, params: SortieStock$Params, context?: HttpContext): Observable<StrictHttpResponse<StockMovementDto>> {
  const rb = new RequestBuilder(rootUrl, sortieStock.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

sortieStock.PATH = '/gestionstock/v1/mouvements/sortie';
