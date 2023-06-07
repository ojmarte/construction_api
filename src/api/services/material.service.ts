import MaterialModel, { Material, Price } from '../models/material.model';

export class MaterialService {
  // Get all materials
  async getAllMaterials(): Promise<Material[]> {
    try {
      const materials = await MaterialModel.find();
      return materials;
    } catch (error) {
      throw new Error('Failed to fetch materials');
    }
  }

  // Get a material by ID
  async getMaterialById(id: string): Promise<Material | null> {
      try {
        const material = await MaterialModel.findById(id);
        return material;
      } catch (error) {
        throw new Error('Failed to fetch material by ID');
      }
  }

  // Create a new material
  async createMaterial(material: Material): Promise<Material> {
    try {
      const createdMaterial = await MaterialModel.create(material);
      return createdMaterial;
    } catch (error) {
      throw new Error('Failed to create material');
    }
  }

  // Update a material by ID
  async updateMaterialById(id: string, updatedMaterial: Partial<Material>): Promise<Material | null> {
    try {
      const material = await MaterialModel.findByIdAndUpdate(id, updatedMaterial, { new: true });
      return material;
    } catch (error) {
      throw new Error('Failed to update material');
    }
  }

  // Delete a material by ID
  async deleteMaterialById(id: string): Promise<void> {
    try {
      await MaterialModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Failed to delete material');
    }
  }

  // Add a price to a material by ID
  async addPriceToMaterial(id: string, price: Price): Promise<Material | null> {
    try {
      const material = await MaterialModel.findByIdAndUpdate(
        id,
        { $push: { prices: price } },
        { new: true }
      );
      return material;
    } catch (error) {
      throw new Error('Failed to add price to material');
    }
  }
}
