/* tslint:disable */
/* eslint-disable */
import { BaseInfoDto } from '../models/base-info-dto';
import { CompanyDto } from '../models/company-dto';
export interface CustomerDto {
  baseInfo?: BaseInfoDto;
  company?: CompanyDto;
  id?: number;
}
