/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SupplierOrderLigneDto } from '../../models/supplier-order-ligne-dto';

export interface FindAllSupplierOrderLigneBySupplierOrderId$Params {
  idSupplierOrder: number;
}

export function findAllSupplierOrderLigneBySupplierOrderId(http: HttpClient, rootUrl: string, params: FindAllSupplierOrderLigneBySupplierOrderId$Params, context?: HttpContext): Observable<StrictHttpResponse<SupplierOrderLigneDto>> {
  const rb = new RequestBuilder(rootUrl, findAllSupplierOrderLigneBySupplierOrderId.PATH, 'get');
  if (params) {
    rb.path('idSupplierOrder', params.idSupplierOrder, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SupplierOrderLigneDto>;
    })
  );
}

findAllSupplierOrderLigneBySupplierOrderId.PATH = '/gestionstock/v1/commandfournisseurs/orderlines/{idSupplierOrder}';
