import EquipmentModel, { Equipment, Price } from '../models/equipments.model';

export class EquipmentService {
  // Get all equipment
  async getAllEquipment(): Promise<Equipment[]> {
    try {
      const equipment = await EquipmentModel.find();
      return equipment;
    } catch (error) {
      throw new Error('Failed to fetch equipment');
    }
  }

  // Get an equipment by ID
  async getEquipmentById(id: string): Promise<Equipment | null> {
    try {
      const equipment = await EquipmentModel.findById(id);
      return equipment;
    } catch (error) {
      throw new Error('Failed to fetch equipment by ID');
    }
  }

  // Create a new equipment
  async createEquipment(equipment: Equipment): Promise<Equipment> {
    try {
      const createdEquipment = await EquipmentModel.create(equipment);
      return createdEquipment;
    } catch (error) {
      throw new Error('Failed to create equipment');
    }
  }

  // Update an equipment by ID
  async updateEquipmentById(id: string, updatedEquipment: Partial<Equipment>): Promise<Equipment | null> {
    try {
      const equipment = await EquipmentModel.findByIdAndUpdate(id, updatedEquipment, { new: true });
      return equipment;
    } catch (error) {
      throw new Error('Failed to update equipment');
    }
  }

  // Delete an equipment by ID
  async deleteEquipmentById(id: string): Promise<void> {
    try {
      await EquipmentModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Failed to delete equipment');
    }
  }

  // Add a price to an equipment by ID
  async addPriceToEquipment(id: string, price: Price): Promise<Equipment | null> {
    try {
      const equipment = await EquipmentModel.findByIdAndUpdate(
        id,
        { $push: { prices: price } },
        { new: true }
      );
      return equipment;
    } catch (error) {
      throw new Error('Failed to add price to equipment');
    }
  }
}
