/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomerOrderDto } from '../../models/customer-order-dto';

export interface UpdateItem1$Params {
  idCustomerOrder: number;
  idItem: number;
}

export function updateItem1(http: HttpClient, rootUrl: string, params: UpdateItem1$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerOrderDto>> {
  const rb = new RequestBuilder(rootUrl, updateItem1.PATH, 'get');
  if (params) {
    rb.path('idCustomerOrder', params.idCustomerOrder, {});
    rb.path('idItem', params.idItem, {});
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

updateItem1.PATH = '/gestionstock/v1/commandclients/update/clients/{idCustomerOrder}/{idItem}';
