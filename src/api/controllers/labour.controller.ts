import { Request, Response } from 'express';
import { Profession, Rate } from '../models/labour.model';
import { LabourService } from '../services/labour.service';

export class LabourController {
  private labourService: LabourService;

  constructor() {
    this.labourService = new LabourService();
  }

  // Get all labour professions
  getAllLabourProfessions = async (_req: Request, res: Response): Promise<void> => {
    try {
      const professions = await this.labourService.getAllLabourProfessions();
      res.status(200).json(professions);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch labour professions' });
    }
  };

  // Get labour profession by ID
  getLabourById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const labour = await this.labourService.getLabourById(id);
      if (labour) {
        res.status(200).json(labour);
      } else {
        res.status(404).json({ error: 'Labour profession not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch labour profession' });
    }
  };

  // Create a new labour profession
  createLabourProfession = async (req: Request, res: Response): Promise<void> => {
    const labourProfession: Profession = req.body;
    try {
      const createdProfession = await this.labourService.createLabourProfession(labourProfession);
      res.status(201).json(createdProfession);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create labour profession' });
    }
  };

  // Update a labour profession by ID
  updateLabourProfessionById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const updatedProfession: Partial<Profession> = req.body;
    try {
      const profession = await this.labourService.updateLabourProfessionById(id, updatedProfession);
      if (profession) {
        res.status(200).json(profession);
      } else {
        res.status(404).json({ error: 'Labour profession not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update labour profession' });
    }
  };

  // Delete a labour profession by ID
  deleteLabourProfessionById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.labourService.deleteLabourProfessionById(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete labour profession' });
    }
  };

  // Add a rate to a labour profession by ID
  addRateToLabourProfession = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const rate: Rate = req.body;
    try {
      const profession = await this.labourService.addRateToLabourProfession(id, rate);
      if (profession) {
        res.status(200).json(profession);
      } else {
        res.status(404).json({ error: 'Labour profession not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to add rate to labour profession' });
    }
  };
}
