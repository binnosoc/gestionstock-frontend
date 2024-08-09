/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomerOrderDto } from '../../models/customer-order-dto';

export interface UpdateOrderQuantity1$Params {
  idCustomerOrder: number;
  orderLigneID: number;
  quantity: number;
}

export function updateOrderQuantity1(http: HttpClient, rootUrl: string, params: UpdateOrderQuantity1$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerOrderDto>> {
  const rb = new RequestBuilder(rootUrl, updateOrderQuantity1.PATH, 'get');
  if (params) {
    rb.path('idCustomerOrder', params.idCustomerOrder, {});
    rb.path('orderLigneID', params.orderLigneID, {});
    rb.path('quantity', params.quantity, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CustomerOrderDto>;
    })
  );
}

updateOrderQuantity1.PATH = '/gestionstock/v1/commandclients/update/{idCustomerOrder}/{orderLigneID}/{quantity}';
