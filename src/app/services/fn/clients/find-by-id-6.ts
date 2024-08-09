/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomerDto } from '../../models/customer-dto';

export interface FindById6$Params {
  id: number;
}

export function findById6(http: HttpClient, rootUrl: string, params: FindById6$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerDto>> {
  const rb = new RequestBuilder(rootUrl, findById6.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

findById6.PATH = '/gestionstock/v1/clients/{id}';
