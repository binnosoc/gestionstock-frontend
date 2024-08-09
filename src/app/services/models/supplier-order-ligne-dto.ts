/* tslint:disable */
/* eslint-disable */
import { ItemDto } from '../models/item-dto';
import { SupplierOrderDto } from '../models/supplier-order-dto';
export interface SupplierOrderLigneDto {
  id?: number;
  item?: ItemDto;
  supplierOrder?: SupplierOrderDto;
}
