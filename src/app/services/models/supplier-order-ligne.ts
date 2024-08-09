/* tslint:disable */
/* eslint-disable */
import { Item } from '../models/item';
import { SupplierOrder } from '../models/supplier-order';
export interface SupplierOrderLigne {
  creationDate?: string;
  id?: number;
  item?: Item;
  lastModifiedDate?: string;
  supplierOrder?: SupplierOrder;
}
