import MaterialYieldModel, { MaterialYield } from '../models/materialYield.model';

export class MaterialYieldService {
  // Create a new material yield entry
  async createMaterialYield(materialYield: MaterialYield): Promise<MaterialYield> {
    try {
      const createdMaterialYield = await MaterialYieldModel.create(materialYield);
      return createdMaterialYield;
    } catch (error) {
      throw new Error('Failed to create material yield');
    }
  }

  // Update a material yield entry by ID
  async updateMaterialYieldById(id: string, updatedMaterialYield: Partial<MaterialYield>): Promise<MaterialYield | null> {
    try {
      const materialYield = await MaterialYieldModel.findByIdAndUpdate(id, updatedMaterialYield, { new: true });
      return materialYield;
    } catch (error) {
      throw new Error('Failed to update material yield');
    }
  }

  // Delete a material yield entry by ID
  async deleteMaterialYieldById(id: string): Promise<void> {
    try {
      await MaterialYieldModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Failed to delete material yield');
    }
  }

  // Get all material yield entries
  async getAllMaterialYields(): Promise<MaterialYield[]> {
    try {
      const materialYields = await MaterialYieldModel.find();
      return materialYields;
    } catch (error) {
      throw new Error('Failed to fetch all material yields');
    }
  }

  // Get material yield entry by ID
  async getMaterialYieldById(id: string): Promise<MaterialYield | null> {
    try {
      const materialYield = await MaterialYieldModel.findById(id);
      return materialYield;
    } catch (error) {
      throw new Error('Failed to fetch material yield by ID');
    }
  }

  // Get material yield entries by material ID
  async getMaterialYieldsByMaterialId(materialId: string): Promise<MaterialYield[]> {
    try {
      const materialYields = await MaterialYieldModel.find({ material_id: materialId });
      return materialYields;
    } catch (error) {
      throw new Error('Failed to fetch material yields by material ID');
    }
  }
}
