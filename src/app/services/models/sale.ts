/* tslint:disable */
/* eslint-disable */
import { Company } from '../models/company';
import { SaleLigne } from '../models/sale-ligne';
export interface Sale {
  code?: string;
  company?: Company;
  creationDate?: string;
  description?: string;
  id?: number;
  lastModifiedDate?: string;
  saleDate?: string;
  saleLignes?: Array<SaleLigne>;
}
