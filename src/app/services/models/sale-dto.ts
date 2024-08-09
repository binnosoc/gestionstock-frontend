/* tslint:disable */
/* eslint-disable */
import { CompanyDto } from '../models/company-dto';
import { SaleLigneDto } from '../models/sale-ligne-dto';
export interface SaleDto {
  code?: string;
  company?: CompanyDto;
  description?: string;
  id?: number;
  saleDate?: string;
  saleLignes?: Array<SaleLigneDto>;
}
