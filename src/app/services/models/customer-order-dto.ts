/* tslint:disable */
/* eslint-disable */
import { CompanyDto } from '../models/company-dto';
import { CustomerDto } from '../models/customer-dto';
export interface CustomerOrderDto {
  company?: CompanyDto;
  customer?: CustomerDto;
  deliveredOrder?: boolean;
  id?: number;
  orderDate?: string;
  quantity?: number;
  status?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE' | 'ANNULER';
  totalAmount?: number;
}
