/* tslint:disable */
/* eslint-disable */
import { Item } from '../models/item';
import { Sale } from '../models/sale';
export interface SaleLigne {
  creationDate?: string;
  id?: number;
  item?: Item;
  lastModifiedDate?: string;
  sale?: Sale;
}
