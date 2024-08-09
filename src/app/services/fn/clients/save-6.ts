/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomerDto } from '../../models/customer-dto';

export interface Save6$Params {
      body: CustomerDto
}

export function save6(http: HttpClient, rootUrl: string, params: Save6$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerDto>> {
  const rb = new RequestBuilder(rootUrl, save6.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CustomerDto>;
    })
  );
}

save6.PATH = '/gestionstock/v1/clients/create';
