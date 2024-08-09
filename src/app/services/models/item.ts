/* tslint:disable */
/* eslint-disable */
import { Category } from '../models/category';
import { Company } from '../models/company';
import { CustomerOrderLigne } from '../models/customer-order-ligne';
import { SaleLigne } from '../models/sale-ligne';
import { StockMovement } from '../models/stock-movement';
import { SupplierOrderLigne } from '../models/supplier-order-ligne';
export interface Item {
  category?: Category;
  code?: string;
  company?: Company;
  creationDate?: string;
  customerOrdersLigne?: Array<CustomerOrderLigne>;
  description?: string;
  id?: number;
  lastModifiedDate?: string;
  name?: string;
  salesLigne?: Array<SaleLigne>;
  stockMovements?: Array<StockMovement>;
  stockQuantity?: number;
  supplierOrdersLigne?: Array<SupplierOrderLigne>;
  unitPrice?: number;
}
