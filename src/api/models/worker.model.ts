import { Schema, model, Document } from 'mongoose';

export interface Profession extends Document {
  worker_name: string;
  category: string;
  level: string;
  unit: Unit;
  rates: Rate[];
}

export interface Unit {
  measurement: string;
  currency: string;
}

export interface Rate {
  value: number;
  date: Date;
}

const workerSchema = new Schema<Profession>({
  worker_name: { type: String, required: true },
  category: { type: String, required: true },
  level: { type: String, required: true },
  unit: {
    measurement: { type: String, required: true },
    currency: { type: String, required: true },
  },
  rates: [
    {
      value: { type: Number, required: true },
      date: { type: Date, required: true },
    },
  ],
});

const WorkerModel = model<Profession>('worker', workerSchema);

export default WorkerModel;

