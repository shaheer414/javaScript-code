import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProjectService } from './project.service';
@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  @Post()
  async createProject(
    @Body()
    body: {
      name: string;
      projectId: string;
      startDate: Date;
      endDate?: Date;
      status?: string;
    },
  ) {
    return this.projectService.createProject(
      body.name,
      body.projectId,
      body.startDate,
      body.endDate,
      body.status,
    );
  }
  @Get()
  async getAllProjects() {
    return this.projectService.getAllProjects();
  }
  @Put(':id')
  async updateProject(
    @Param('id') id: string,
    @Body() body: { name?: string; endDate?: Date; status?: string },
  ) {
    return this.projectService.updateProject(
      id,
      body.name,
      body.endDate,
      body.status,
    );
  }
}
