import { Request, Response } from 'express';
import { MaterialYield } from '../models/materialYield.model';
import { MaterialYieldService } from '../services/materialYield.service';

export class MaterialYieldController {
  private materialYieldService: MaterialYieldService;

  constructor() {
    this.materialYieldService = new MaterialYieldService();
  }

  // Create a new material yield entry
  createMaterialYield = async (req: Request, res: Response): Promise<void> => {
    const materialYield: MaterialYield = req.body;
    try {
      const createdMaterialYield = await this.materialYieldService.createMaterialYield(materialYield);
      res.status(201).json(createdMaterialYield);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create material yield' });
    }
  };

  // Update a material yield entry by ID
  updateMaterialYieldById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const updatedMaterialYield: Partial<MaterialYield> = req.body;
    try {
      const materialYield = await this.materialYieldService.updateMaterialYieldById(id, updatedMaterialYield);
      if (materialYield) {
        res.status(200).json(materialYield);
      } else {
        res.status(404).json({ error: 'Material yield not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update material yield' });
    }
  };

  // Delete a material yield entry by ID
  deleteMaterialYieldById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.materialYieldService.deleteMaterialYieldById(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete material yield' });
    }
  };

  // Get all material yield entries
  getAllMaterialYields = async (_req: Request, res: Response): Promise<void> => {
    try {
      const materialYields = await this.materialYieldService.getAllMaterialYields();
      res.status(200).json(materialYields);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch all material yields' });
    }
  };

  // Get material yield entry by ID
  getMaterialYieldById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const materialYield = await this.materialYieldService.getMaterialYieldById(id);
      if (materialYield) {
        res.status(200).json(materialYield);
      } else {
        res.status(404).json({ error: 'Material yield not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch material yield' });
    }
  };

  // Get material yield entries by material ID
  getMaterialYieldsByMaterialId = async (req: Request, res: Response): Promise<void> => {
    const { materialId } = req.params;
    try {
      const materialYields = await this.materialYieldService.getMaterialYieldsByMaterialId(materialId);
      res.status(200).json(materialYields);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch material yields by material ID' });
    }
  };
}
