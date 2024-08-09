/* tslint:disable */
/* eslint-disable */
import { Company } from '../models/company';
import { Item } from '../models/item';
export interface Category {
  company?: Company;
  creationDate?: string;
  description?: string;
  id?: number;
  items?: Array<Item>;
  lastModifiedDate?: string;
  name?: string;
}
