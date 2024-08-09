/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SupplierOrderDto } from '../../models/supplier-order-dto';

export interface UpdateOrderStatus$Params {
  idSupplierOrder: number;
  orderStatus: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE' | 'ANNULER';
}

export function updateOrderStatus(http: HttpClient, rootUrl: string, params: UpdateOrderStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierOrderDto>> {
  const rb = new RequestBuilder(rootUrl, updateOrderStatus.PATH, 'patch');
  if (params) {
    rb.path('idSupplierOrder', params.idSupplierOrder, {});
    rb.path('orderStatus', params.orderStatus, {});
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

updateOrderStatus.PATH = '/gestionstock/v1/commandfournisseurs/update/status/{idSupplierOrder}/{orderStatus}';
