/* tslint:disable */
/* eslint-disable */
import { Company } from '../models/company';
import { Customer } from '../models/customer';
import { CustomerOrderLigne } from '../models/customer-order-ligne';
export interface CustomerOrder {
  company?: Company;
  creationDate?: string;
  customer?: Customer;
  customerOrdersLigne?: Array<CustomerOrderLigne>;
  id?: number;
  lastModifiedDate?: string;
  orderDate?: string;
  quantity?: number;
  status?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE' | 'ANNULER';
  totalAmount?: number;
}
