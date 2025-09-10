import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from './company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
  ) {}

  async createCompany(
    name: string,
    address: string,
    companyId: string,
  ): Promise<Company> {
    const createdCompany = new this.companyModel({ name, address, companyId });
    return createdCompany.save();
  }

  async getAllCompanies(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }
}
