import EquipmentPerformanceModel, { EquipmentPerformance } from '../models/equipmentPerformance.model';

export class EquipmentPerformanceService {
    // Create a new equipment performance entry
    async createEquipmentPerformance(performance: EquipmentPerformance): Promise<EquipmentPerformance> {
    try {
        const createdPerformance = await EquipmentPerformanceModel.create(performance);
        return createdPerformance;
    } catch (error) {
        throw new Error('Failed to create equipment performance');
    }
    }

    // Get all equipment performance entries
    async getAllEquipmentPerformances(): Promise<EquipmentPerformance[]> {
    try {
        const performances = await EquipmentPerformanceModel.find();
        return performances;
    } catch (error) {
        throw new Error('Failed to fetch all equipment performances');
    }
    }

    // Get equipment performance by ID
    async getEquipmentPerformanceById(id: string): Promise<EquipmentPerformance | null> {
    try {
        const performance = await EquipmentPerformanceModel.findById(id);
        return performance;
    } catch (error) {
        throw new Error('Failed to fetch equipment performance by ID');
    }
    }

    // Get equipment performances by equipment ID
    async getEquipmentPerformancesByEquipmentId(equipmentId: string): Promise<EquipmentPerformance[]> {
        try {
            const performances = await EquipmentPerformanceModel.find({ equipment_id: equipmentId });
            return performances;
        } catch (error) {
            throw new Error('Failed to fetch equipment performances by equipment ID');
        }
        }

    // Update an equipment performance entry by ID
    async updateEquipmentPerformanceById(id: string, updatedPerformance: Partial<EquipmentPerformance>): Promise<EquipmentPerformance | null> {
    try {
        const performance = await EquipmentPerformanceModel.findByIdAndUpdate(id, updatedPerformance, { new: true });
        return performance;
    } catch (error) {
        throw new Error('Failed to update equipment performance');
    }
    }

    // Delete an equipment performance entry by ID
    async deleteEquipmentPerformanceById(id: string): Promise<void> {
    try {
        await EquipmentPerformanceModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error('Failed to delete equipment performance');
    }
    }
}
