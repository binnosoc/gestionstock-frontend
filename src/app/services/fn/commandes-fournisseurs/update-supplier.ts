/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SupplierOrderDto } from '../../models/supplier-order-dto';

export interface UpdateSupplier$Params {
  idSupplierOrder: number;
  idSupplier: number;
}

export function updateSupplier(http: HttpClient, rootUrl: string, params: UpdateSupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierOrderDto>> {
  const rb = new RequestBuilder(rootUrl, updateSupplier.PATH, 'patch');
  if (params) {
    rb.path('idSupplierOrder', params.idSupplierOrder, {});
    rb.path('idSupplier', params.idSupplier, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SupplierOrderDto>;
    })
  );
}

updateSupplier.PATH = '/gestionstock/v1/commandfournisseurs/update/supplier/{idSupplierOrder}/{idSupplier}';
