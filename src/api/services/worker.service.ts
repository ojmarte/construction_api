import WorkerModel, { Profession, Rate } from '../models/worker.model';

export class WorkerService {
  // Get all Worker professions
  async getAllWorkerProfessions(): Promise<Profession[]> {
    try {
      const professions = await WorkerModel.find();
      return professions;
    } catch (error) {
      throw new Error('Failed to fetch Worker professions');
    }
  }

  // Get a Worker by ID
  async getWorkerById(id: string): Promise<Profession | null> {
    try {
      const Worker = await WorkerModel.findById(id);
      return Worker;
    } catch (error) {
      throw new Error('Failed to fetch Worker by ID');
    }
  }

  // Create a new Worker profession
  async createWorkerProfession(WorkerProfession: Profession): Promise<Profession> {
    try {
      const createdProfession = await WorkerModel.create(WorkerProfession);
      return createdProfession;
    } catch (error) {
      throw new Error('Failed to create Worker profession');
    }
  }

  // Update a Worker profession by ID
  async updateWorkerProfessionById(
    id: string,
    updatedProfession: Partial<Profession>
  ): Promise<Profession | null> {
    try {
      const profession = await WorkerModel.findByIdAndUpdate(id, updatedProfession, { new: true });
      return profession;
    } catch (error) {
      throw new Error('Failed to update Worker profession');
    }
  }

  // Delete a Worker profession by ID
  async deleteWorkerProfessionById(id: string): Promise<void> {
    try {
      await WorkerModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Failed to delete Worker profession');
    }
  }

  // Add a rate to a Worker profession by ID
  async addRateToWorkerProfession(
    id: string,
    rate: Rate
  ): Promise<Profession | null> {
    try {
      const profession = await WorkerModel.findByIdAndUpdate(
        id,
        { $push: { rates: rate } },
        { new: true }
      );
      return profession;
    } catch (error) {
      throw new Error('Failed to add rate to Worker profession');
    }
  }
}
