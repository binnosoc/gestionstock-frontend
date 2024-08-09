/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ItemDto } from '../../models/item-dto';

export interface FindByCode1$Params {
  codeItem: string;
}

export function findByCode1(http: HttpClient, rootUrl: string, params: FindByCode1$Params, context?: HttpContext): Observable<StrictHttpResponse<ItemDto>> {
  const rb = new RequestBuilder(rootUrl, findByCode1.PATH, 'get');
  if (params) {
    rb.path('codeItem', params.codeItem, {});
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

findByCode1.PATH = '/gestionstock/v1/items/filter/{codeItem}';
