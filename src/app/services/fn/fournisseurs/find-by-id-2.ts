/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SupplierDto } from '../../models/supplier-dto';

export interface FindById2$Params {
  id: number;
}

export function findById2(http: HttpClient, rootUrl: string, params: FindById2$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierDto>> {
  const rb = new RequestBuilder(rootUrl, findById2.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SupplierDto>;
    })
  );
}

findById2.PATH = '/gestionstock/v1/fournisseurs/{id}';
