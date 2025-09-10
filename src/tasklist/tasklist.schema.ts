import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Tasklist extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, default: false })
  completed: boolean;

  @Prop({ required: true })
  userId: string;
}
export const TasklistSchema = SchemaFactory.createForClass(Tasklist);
