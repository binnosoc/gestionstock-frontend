/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomerDto } from '../../models/customer-dto';

export interface FindAll4$Params {
}

export function findAll4(http: HttpClient, rootUrl: string, params?: FindAll4$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerDto>> {
  const rb = new RequestBuilder(rootUrl, findAll4.PATH, 'get');
  if (params) {
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

findAll4.PATH = '/gestionstock/v1/clients/all';
