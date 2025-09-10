/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Project, ProjectDocument } from "./project.schema";

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>
  ) {}

  async createProject(
    name: string,
    projectId: string,
    startDate: Date,
    endDate?: Date,
    status = "active"
  ): Promise<Project> {
    const createdProject = new this.projectModel({
      name,
      projectId,
      startDate,
      endDate,
      status,
    });
    return createdProject.save();
  }

  async getAllProjects(): Promise<Project[]> {
    return this.projectModel.find().exec();
  }

  async updateProject(
    projectId: string,
    newName?: string,
    newEndDate?: Date,
    newStatus?: string
  ): Promise<Project | null> {
    const updateData: Partial<Project> = {};
    if (newName) updateData.name = newName;
    if (newEndDate) updateData.endDate = newEndDate;
    if (newStatus) updateData.status = newStatus;

    return this.projectModel
        .findByIdAndUpdate(projectId, updateData, { new: true })
        .exec();
  }
}
