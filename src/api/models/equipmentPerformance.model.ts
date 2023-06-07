import { Schema, model, Document } from 'mongoose';

export interface EquipmentPerformance extends Document {
  equipment_id: Schema.Types.ObjectId;
  equipment_type: string;
  performance_name: string;
  unit: string;
  performance_value: number;
  year: number;
}

const equipmentPerformanceSchema = new Schema<EquipmentPerformance>({
  equipment_id: { type: Schema.Types.ObjectId, required: true },
  equipment_type: { type: String, required: true },
  performance_name: { type: String, required: true },
  unit: { type: String, required: true },
  performance_value: { type: Number, required: true },
  year: { type: Number, required: true },
});

const EquipmentPerformanceModel = model<EquipmentPerformance>('EquipmentPerformance', equipmentPerformanceSchema);

export default EquipmentPerformanceModel;
