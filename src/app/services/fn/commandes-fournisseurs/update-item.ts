/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SupplierOrderDto } from '../../models/supplier-order-dto';

export interface UpdateItem$Params {
  idSupplierOrder: number;
  idOrderLine: number;
  itemId: number;
}

export function updateItem(http: HttpClient, rootUrl: string, params: UpdateItem$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierOrderDto>> {
  const rb = new RequestBuilder(rootUrl, updateItem.PATH, 'patch');
  if (params) {
    rb.path('idSupplierOrder', params.idSupplierOrder, {});
    rb.path('idOrderLine', params.idOrderLine, {});
    rb.path('itemId', params.itemId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SupplierOrderDto>;
    })
  );
}

updateItem.PATH = '/gestionstock/v1/commandfournisseurs/update/item/{idSupplierOrder}/{idOrderLine}/{itemId}';
