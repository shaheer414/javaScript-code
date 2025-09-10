import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body()
    body: {
      name: string;
      email: string;
      password: string;
      role: string;
    },
  ) {
    return this.userService.createUser(
      body.name,
      body.email,
      body.password,
      body.role,
    );
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Patch(':id')
  async patchUser(
    @Param('id') id: string,
    @Body() body: { name?: string; email?: string; role?: string },
  ) {
    return this.userService.updateUser(id, body.name, body.email, body.role);
  }
}
