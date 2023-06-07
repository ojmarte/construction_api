import { Schema, model, Document } from 'mongoose';

export interface Profession extends Document {
  labour_name: string;
  category: string;
  unit: string;
  rates: Rate[];
}

export interface Rate {
  value: number;
  date: Date;
}

const labourSchema = new Schema<Profession>({
  labour_name: { type: String, required: true },
  category: { type: String, required: true },
  unit: { type: String, required: true },
  rates: [
    {
      value: { type: Number, required: true },
      date: { type: Date, required: true },
    },
  ],
});

const LabourModel = model<Profession>('labour', labourSchema);

export default LabourModel;
