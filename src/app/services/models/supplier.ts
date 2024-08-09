/* tslint:disable */
/* eslint-disable */
import { BaseInfo } from '../models/base-info';
import { Company } from '../models/company';
import { SupplierOrder } from '../models/supplier-order';
export interface Supplier {
  baseInfo?: BaseInfo;
  company?: Company;
  creationDate?: string;
  id?: number;
  lastModifiedDate?: string;
  supplierOrders?: Array<SupplierOrder>;
}
