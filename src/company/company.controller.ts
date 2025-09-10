import { Controller, Post, Get, Body } from '@nestjs/common';
import { CompanyService } from './company.services';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async createCompany(
    @Body() body: { name: string; address: string; companyId: string },
  ) {
    return this.companyService.createCompany(
      body.name,
      body.address,
      body.companyId,
    );
  }

  @Get()
  async getAllCompanies() {
    return this.companyService.getAllCompanies();
  }
}
