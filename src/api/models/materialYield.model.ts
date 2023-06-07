import { Schema, model, Document } from 'mongoose';

export interface MaterialYield extends Document {
  material_id: Schema.Types.ObjectId;
  yield_name: string;
  category: string;
  unit: string;
  yield: number;
}

const materialYieldSchema = new Schema<MaterialYield>({
  material_id: { type: Schema.Types.ObjectId, required: true },
  yield_name: { type: String, required: true },
  category: { type: String, required: true },
  unit: { type: String, required: true },
  yield: { type: Number, required: true },
});

const MaterialYieldModel = model<MaterialYield>('MaterialYield', materialYieldSchema);

export default MaterialYieldModel;
