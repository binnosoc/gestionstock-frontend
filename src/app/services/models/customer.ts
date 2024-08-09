/* tslint:disable */
/* eslint-disable */
import { BaseInfo } from '../models/base-info';
import { Company } from '../models/company';
import { CustomerOrder } from '../models/customer-order';
export interface Customer {
  baseInfo?: BaseInfo;
  company?: Company;
  creationDate?: string;
  customerOrders?: Array<CustomerOrder>;
  id?: number;
  lastModifiedDate?: string;
}
