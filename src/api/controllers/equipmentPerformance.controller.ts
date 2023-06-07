import { Request, Response } from 'express';
import { EquipmentPerformance } from '../models/equipmentPerformance.model';
import { EquipmentPerformanceService } from '../services/equipmentPerformance.service';

export class EquipmentPerformanceController {
  private equipmentPerformanceService: EquipmentPerformanceService;

  constructor() {
    this.equipmentPerformanceService = new EquipmentPerformanceService();
  }

  // Create a new equipment performance entry
  createEquipmentPerformance = async (req: Request, res: Response): Promise<void> => {
    const performance: EquipmentPerformance = req.body;
    try {
      const createdPerformance = await this.equipmentPerformanceService.createEquipmentPerformance(performance);
      res.status(201).json(createdPerformance);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create equipment performance' });
    }
  };

  // Get all equipment performance entries
  getAllEquipmentPerformances = async (_req: Request, res: Response): Promise<void> => {
    try {
      const performances = await this.equipmentPerformanceService.getAllEquipmentPerformances();
      res.status(200).json(performances);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch all equipment performances' });
    }
  };

  // Get equipment performance by ID
  getEquipmentPerformanceById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const performance = await this.equipmentPerformanceService.getEquipmentPerformanceById(id);
      if (performance) {
        res.status(200).json(performance);
      } else {
        res.status(404).json({ error: 'Equipment performance not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch equipment performance by ID' });
    }
  };

  // Get equipment performances by equipment ID
  getEquipmentPerformancesByEquipmentId = async (req: Request, res: Response): Promise<void> => {
    const { equipmentId } = req.params;
    try {
      const performances = await this.equipmentPerformanceService.getEquipmentPerformancesByEquipmentId(equipmentId);
      res.status(200).json(performances);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch equipment performances by equipment ID' });
    }
  };

  // Update an equipment performance entry by ID
  updateEquipmentPerformanceById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const updatedPerformance: Partial<EquipmentPerformance> = req.body;
    try {
      const performance = await this.equipmentPerformanceService.updateEquipmentPerformanceById(id, updatedPerformance);
      if (performance) {
        res.status(200).json(performance);
      } else {
        res.status(404).json({ error: 'Equipment performance not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update equipment performance' });
    }
  };

  // Delete an equipment performance entry by ID
  deleteEquipmentPerformanceById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.equipmentPerformanceService.deleteEquipmentPerformanceById(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete equipment performance' });
    }
  };
}
