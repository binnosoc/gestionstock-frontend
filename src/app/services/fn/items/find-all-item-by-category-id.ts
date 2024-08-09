/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ItemDto } from '../../models/item-dto';

export interface FindAllItemByCategoryId$Params {
  idCategory: number;
}

export function findAllItemByCategoryId(http: HttpClient, rootUrl: string, params: FindAllItemByCategoryId$Params, context?: HttpContext): Observable<StrictHttpResponse<ItemDto>> {
  const rb = new RequestBuilder(rootUrl, findAllItemByCategoryId.PATH, 'get');
  if (params) {
    rb.path('idCategory', params.idCategory, {});
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

findAllItemByCategoryId.PATH = '/gestionstock/v1/items/filter/category/{idCategory}';
