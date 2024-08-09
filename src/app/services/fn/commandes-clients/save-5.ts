/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomerOrderDto } from '../../models/customer-order-dto';

export interface Save5$Params {
      body: CustomerOrderDto
}

export function save5(http: HttpClient, rootUrl: string, params: Save5$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerOrderDto>> {
  const rb = new RequestBuilder(rootUrl, save5.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

save5.PATH = '/gestionstock/v1/commandclients/create';
