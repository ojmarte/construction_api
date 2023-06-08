import { Schema, model, Document } from 'mongoose';

export interface Tool extends Document {
  tool_name: string;
  category: string;
  unit: Unit;
  prices: Price[];
}

export interface Unit {
  measurement: string;
  currency: string;
}

export interface Price {
  price: number;
  date: Date;
}

const toolSchema = new Schema<Tool>({
  tool_name: { type: String, required: true },
  category: { type: String, required: true },
  unit: {
    measurement: { type: String, required: true },
    currency: { type: String, required: true },
  },
  prices: [
    {
      price: { type: Number, required: true },
      date: { type: Date, required: true },
    },
  ],
});

const ToolModel = model<Tool>('Tool', toolSchema);

export default ToolModel;
