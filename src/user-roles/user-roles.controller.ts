import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/guards/roles/roles.decorator';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { Role } from 'src/guards/roles/roles.enums';

@Controller('user-roles')
@UseGuards(RolesGuard)
export class UserRolesController {
  @Get('owner-data')
  @Roles(Role.Owner)
  getOwnerData() {
    return { message: 'Only Owner can access' };
  }
  @Get('admin-data')
  @Roles(Role.Admin)
  getAdminData() {
    return { message: 'Only Admin can access' };
  }

  @Get('user-data')
  getUserData() {
    return { message: 'Anyone can Access' };
  }
}
