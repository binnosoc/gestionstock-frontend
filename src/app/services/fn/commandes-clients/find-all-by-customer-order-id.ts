/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomerOrderDto } from '../../models/customer-order-dto';

export interface FindAllByCustomerOrderId$Params {
  idCustomer: number;
}

export function findAllByCustomerOrderId(http: HttpClient, rootUrl: string, params: FindAllByCustomerOrderId$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerOrderDto>> {
  const rb = new RequestBuilder(rootUrl, findAllByCustomerOrderId.PATH, 'get');
  if (params) {
    rb.path('idCustomer', params.idCustomer, {});
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

findAllByCustomerOrderId.PATH = '/gestionstock/v1/commandclients/allByClient/{idCustomer}';
