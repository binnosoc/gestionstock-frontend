/* tslint:disable */
/* eslint-disable */
import { CategoryDto } from '../models/category-dto';
import { CompanyDto } from '../models/company-dto';
export interface ItemDto {
  category?: CategoryDto;
  code?: string;
  company?: CompanyDto;
  description?: string;
  id?: number;
  name?: string;
  stockQuantity?: number;
  unitPrice?: number;
}
