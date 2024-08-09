/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomerOrderDto } from '../../models/customer-order-dto';

export interface FindById5$Params {
  idCustomerOrder: number;
}

export function findById5(http: HttpClient, rootUrl: string, params: FindById5$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerOrderDto>> {
  const rb = new RequestBuilder(rootUrl, findById5.PATH, 'get');
  if (params) {
    rb.path('idCustomerOrder', params.idCustomerOrder, {});
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

findById5.PATH = '/gestionstock/v1/commandclients/search/{idCustomerOrder}';
