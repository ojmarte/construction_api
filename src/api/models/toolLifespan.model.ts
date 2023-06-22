import { Schema, model, Document } from 'mongoose';

export interface ToolLifespan extends Document {
  tool_id: string;
  tool_name: string;
  tool_type: string;
  manufacturer: string;
  lifespan: number;
  notes: string;
}

const toolLifespanSchema = new Schema<ToolLifespan>({
  tool_id: { type: String, required: true },
  tool_name: { type: String, required: true },
  tool_type: { type: String, required: true },
  manufacturer: { type: String, required: true },
  lifespan: { type: Number, required: true },
  notes: { type: String },
});

const ToolLifespanModel = model<ToolLifespan>('ToolLifespan', toolLifespanSchema);

export default ToolLifespanModel;
