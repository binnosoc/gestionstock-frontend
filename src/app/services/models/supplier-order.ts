/* tslint:disable */
/* eslint-disable */
import { Supplier } from '../models/supplier';
import { SupplierOrderLigne } from '../models/supplier-order-ligne';
export interface SupplierOrder {
  creationDate?: string;
  id?: number;
  lastModifiedDate?: string;
  orderDate?: string;
  quantity?: number;
  status?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE' | 'ANNULER';
  supplier?: Supplier;
  supplierOrdersLigne?: Array<SupplierOrderLigne>;
  totalAmount?: number;
}
