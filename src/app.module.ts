import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModule } from './company/company.module';
import { UsersModule } from './users/users.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mydatabase'),
    ProjectModule,
    CompanyModule,
    UsersModule,
  ],
})
export class AppModule {}
