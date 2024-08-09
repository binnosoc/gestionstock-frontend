/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SupplierDto } from '../../models/supplier-dto';

export interface FindAll2$Params {
}

export function findAll2(http: HttpClient, rootUrl: string, params?: FindAll2$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierDto>> {
  const rb = new RequestBuilder(rootUrl, findAll2.PATH, 'get');
  if (params) {
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

findAll2.PATH = '/gestionstock/v1/fournisseurs/all';
