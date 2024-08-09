/* tslint:disable */
/* eslint-disable */
import { CustomerOrder } from '../models/customer-order';
import { Item } from '../models/item';
export interface CustomerOrderLigne {
  creationDate?: string;
  customerOrder?: CustomerOrder;
  id?: number;
  item?: Item;
  lastModifiedDate?: string;
}
