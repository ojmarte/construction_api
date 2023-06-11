import { Request, Response } from 'express';
import { Profession, Rate } from '../models/worker.model';
import { WorkerService } from '../services/worker.service';

export class WorkerController {
  private WorkerService: WorkerService;

  constructor() {
    this.WorkerService = new WorkerService();
  }

  // Get all Worker professions
  getAllWorkerProfessions = async (_req: Request, res: Response): Promise<void> => {
    try {
      const professions = await this.WorkerService.getAllWorkerProfessions();
      res.status(200).json(professions);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch Worker professions' });
    }
  };

  // Get Worker profession by ID
  getWorkerById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const Worker = await this.WorkerService.getWorkerById(id);
      if (Worker) {
        res.status(200).json(Worker);
      } else {
        res.status(404).json({ error: 'Worker profession not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch Worker profession' });
    }
  };

  // Create a new Worker profession
  createWorkerProfession = async (req: Request, res: Response): Promise<void> => {
    const WorkerProfession: Profession = req.body;
    try {
      const createdProfession = await this.WorkerService.createWorkerProfession(WorkerProfession);
      res.status(201).json(createdProfession);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create Worker profession' });
    }
  };

  // Update a Worker profession by ID
  updateWorkerProfessionById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const updatedProfession: Partial<Profession> = req.body;
    try {
      const profession = await this.WorkerService.updateWorkerProfessionById(id, updatedProfession);
      if (profession) {
        res.status(200).json(profession);
      } else {
        res.status(404).json({ error: 'Worker profession not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update Worker profession' });
    }
  };

  // Delete a Worker profession by ID
  deleteWorkerProfessionById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.WorkerService.deleteWorkerProfessionById(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete Worker profession' });
    }
  };

  // Add a rate to a Worker profession by ID
  addRateToWorkerProfession = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const rate: Rate = req.body;
    try {
      const profession = await this.WorkerService.addRateToWorkerProfession(id, rate);
      if (profession) {
        res.status(200).json(profession);
      } else {
        res.status(404).json({ error: 'Worker profession not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to add rate to Worker profession' });
    }
  };
}
