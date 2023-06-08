import { Schema, model, Document } from 'mongoose';

export interface Equipment extends Document {
  equipment_name: string;
  category: string;
  unit: Unit;
  prices: Price[];
}

export interface Unit {
  measurement: string;
  currency: string;
}

export interface Price {
  value: number;
  date: Date;
}

const equipmentSchema = new Schema<Equipment>({
  equipment_name: { type: String, required: true },
  category: { type: String, required: true },
  unit: {
    measurement: { type: String, required: true },
    currency: { type: String, required: true },
  },
  prices: [
    {
      value: { type: Number, required: true },
      date: { type: Date, required: true },
    },
  ],
});

const EquipmentModel = model<Equipment>('Equipment', equipmentSchema);

export default EquipmentModel;
