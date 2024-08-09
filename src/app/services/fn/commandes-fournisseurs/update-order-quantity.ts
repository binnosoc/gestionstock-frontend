/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SupplierOrderDto } from '../../models/supplier-order-dto';

export interface UpdateOrderQuantity$Params {
  idSupplierOrder: number;
  idOrderLine: number;
  quantity: number;
}

export function updateOrderQuantity(http: HttpClient, rootUrl: string, params: UpdateOrderQuantity$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierOrderDto>> {
  const rb = new RequestBuilder(rootUrl, updateOrderQuantity.PATH, 'patch');
  if (params) {
    rb.path('idSupplierOrder', params.idSupplierOrder, {});
    rb.path('idOrderLine', params.idOrderLine, {});
    rb.path('quantity', params.quantity, {});
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

updateOrderQuantity.PATH = '/gestionstock/v1/commandfournisseurs/update/quantity/{idSupplierOrder}/{idOrderLine}/{quantity}';
