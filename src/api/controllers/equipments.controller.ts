import { Request, Response } from 'express';
import { Equipment, Price } from '../models/equipments.model';
import { EquipmentService } from '../services/equipments.service';

export class EquipmentController {
  private equipmentService: EquipmentService;

  constructor() {
    this.equipmentService = new EquipmentService();
  }

  // Get all equipment
  getAllEquipment = async (_req: Request, res: Response): Promise<void> => {
    try {
      const equipment = await this.equipmentService.getAllEquipment();
      res.status(200).json(equipment);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch equipment' });
    }
  };

  // Get equipment by ID
  getEquipmentById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const equipment = await this.equipmentService.getEquipmentById(id);
      if (equipment) {
        res.status(200).json(equipment);
      } else {
        res.status(404).json({ error: 'Equipment not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch equipment by ID' });
    }
  };

  // Create a new equipment
  createEquipment = async (req: Request, res: Response): Promise<void> => {
    const equipment: Equipment = req.body;
    try {
      const createdEquipment = await this.equipmentService.createEquipment(equipment);
      res.status(201).json(createdEquipment);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create equipment' });
    }
  };

  // Update an equipment by ID
  updateEquipmentById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const updatedEquipment: Partial<Equipment> = req.body;
    try {
      const equipment = await this.equipmentService.updateEquipmentById(id, updatedEquipment);
      if (equipment) {
        res.status(200).json(equipment);
      } else {
        res.status(404).json({ error: 'Equipment not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update equipment' });
    }
  };

  // Delete an equipment by ID
  deleteEquipmentById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.equipmentService.deleteEquipmentById(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete equipment' });
    }
  };

  // Add a price to an equipment by ID
  addPriceToEquipment = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const price: Price = req.body;
    try {
      const equipment = await this.equipmentService.addPriceToEquipment(id, price);
      if (equipment) {
        res.status(200).json(equipment);
      } else {
        res.status(404).json({ error: 'Equipment not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to add price to equipment' });
    }
  };
}
