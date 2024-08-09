/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CategoryDto } from '../../models/category-dto';

export interface FindAllByCompanyId$Params {
  idCompany: number;
}

export function findAllByCompanyId(http: HttpClient, rootUrl: string, params: FindAllByCompanyId$Params, context?: HttpContext): Observable<StrictHttpResponse<CategoryDto>> {
  const rb = new RequestBuilder(rootUrl, findAllByCompanyId.PATH, 'get');
  if (params) {
    rb.path('idCompany', params.idCompany, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CategoryDto>;
    })
  );
}

findAllByCompanyId.PATH = '/gestionstock/v1/categories/all/{idCompany}';
