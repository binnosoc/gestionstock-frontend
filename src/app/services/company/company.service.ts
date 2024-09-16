import { Injectable } from '@angular/core';
import { CompaniesService } from '../services';
import { CompanyDto } from '../models';
import { Observable } from 'rxjs';
import { Save3$Params } from '../fn/companies/save-3';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private companiesService: CompaniesService) 
  { }

  register(companyDto: CompanyDto): Observable<CompanyDto> {
    const params: Save3$Params = {
      body: companyDto
    };
    return this.companiesService.save3(params);
  }
}
