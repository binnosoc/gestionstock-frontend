/* tslint:disable */
/* eslint-disable */
import { ItemDto } from '../models/item-dto';
import { SaleDto } from '../models/sale-dto';
export interface SaleLigneDto {
  id?: number;
  item?: ItemDto;
  sale?: SaleDto;
}
