import { Schema, model, Document } from 'mongoose';

export interface Job extends Document {
  job_name: string;
  job_yield: Yield;
  job_date: Date;
  worker_group: WorkerGroup[];
  tool_group: ToolGroup[];
  equipment_group: EquipmentGroup[];
}

export interface Yield {
  unit: string;
  value: number;
}

export interface WorkerGroup {
  worker_id: string;
  quantity: number;
}

export interface ToolGroup {
  tool_id: string;
  value: number;
}

export interface EquipmentGroup {
  equipment_id: string;
  value: number;
}

const jobSchema = new Schema<Job>({
  job_name: { type: String, required: true },
  job_yield: {
    unit: { type: String, required: true },
    value: { type: Number, required: true },
  },
  job_date: { type: Date, required: true },
  worker_group: [
    {
      worker_id: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  tool_group: [
    {
      tool_id: { type: String, required: true },
      value: { type: Number, required: true },
    },
  ],
  equipment_group: [
    {
      equipment_id: { type: String, required: true },
      value: { type: Number, required: true },
    },
  ],
});

const JobModel = model<Job>('Job', jobSchema);

export default JobModel;
