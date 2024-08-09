/* tslint:disable */
/* eslint-disable */
import { Address } from '../models/address';
import { Category } from '../models/category';
import { Customer } from '../models/customer';
import { Item } from '../models/item';
import { Sale } from '../models/sale';
import { Supplier } from '../models/supplier';
export interface Company {
  address?: Address;
  categories?: Array<Category>;
  code?: string;
  creationDate?: string;
  customers?: Array<Customer>;
  email?: string;
  id?: number;
  items?: Array<Item>;
  lastModifiedDate?: string;
  name?: string;
  phone?: string;
  picture?: string;
  sales?: Array<Sale>;
  suppliers?: Array<Supplier>;
}
