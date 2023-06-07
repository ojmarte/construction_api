import { Schema, model, Document, ObjectId } from 'mongoose';

export interface Material extends Document {
  material_name: string;
  category: string;
  unit: string;
  prices: Price[];
}

export interface Price {
  price: number;
  date: Date;
}

const materialSchema = new Schema<Material>({
  material_name: { type: String, required: true },
  category: { type: String, required: true },
  unit: { type: String, required: true },
  prices: [
    {
      price: { type: Number, required: true },
      date: { type: Date, required: true },
    },
  ],
});

const MaterialModel = model<Material>('Material', materialSchema);

export default MaterialModel;
