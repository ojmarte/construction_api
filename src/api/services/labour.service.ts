import LabourModel, { Profession, Rate } from '../models/labour.model';

export class LabourService {
  // Get all labour professions
  async getAllLabourProfessions(): Promise<Profession[]> {
    try {
      const professions = await LabourModel.find();
      return professions;
    } catch (error) {
      throw new Error('Failed to fetch labour professions');
    }
  }

  // Get a labour by ID
  async getLabourById(id: string): Promise<Profession | null> {
    try {
      const labour = await LabourModel.findById(id);
      return labour;
    } catch (error) {
      throw new Error('Failed to fetch labour by ID');
    }
  }

  // Create a new labour profession
  async createLabourProfession(labourProfession: Profession): Promise<Profession> {
    try {
      const createdProfession = await LabourModel.create(labourProfession);
      return createdProfession;
    } catch (error) {
      throw new Error('Failed to create labour profession');
    }
  }

  // Update a labour profession by ID
  async updateLabourProfessionById(
    id: string,
    updatedProfession: Partial<Profession>
  ): Promise<Profession | null> {
    try {
      const profession = await LabourModel.findByIdAndUpdate(id, updatedProfession, { new: true });
      return profession;
    } catch (error) {
      throw new Error('Failed to update labour profession');
    }
  }

  // Delete a labour profession by ID
  async deleteLabourProfessionById(id: string): Promise<void> {
    try {
      await LabourModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Failed to delete labour profession');
    }
  }

  // Add a rate to a labour profession by ID
  async addRateToLabourProfession(
    id: string,
    rate: Rate
  ): Promise<Profession | null> {
    try {
      const profession = await LabourModel.findByIdAndUpdate(
        id,
        { $push: { rates: rate } },
        { new: true }
      );
      return profession;
    } catch (error) {
      throw new Error('Failed to add rate to labour profession');
    }
  }
}
