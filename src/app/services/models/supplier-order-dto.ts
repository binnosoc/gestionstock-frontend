/* tslint:disable */
/* eslint-disable */
import { SupplierDto } from '../models/supplier-dto';
export interface SupplierOrderDto {
  deliveredOrder?: boolean;
  id?: number;
  orderDate?: string;
  quantity?: number;
  status?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE' | 'ANNULER';
  supplier?: SupplierDto;
  totalAmount?: number;
}
