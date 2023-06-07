import { Request, Response } from 'express';
import { Material, Price } from '../models/material.model';
import { MaterialService } from '../services/material.service';

export class MaterialController {
  private materialService: MaterialService;

  constructor() {
    this.materialService = new MaterialService();
  }

  // Get all materials
  getAllMaterials = async (_req: Request, res: Response): Promise<void> => {
    try {
      const materials = await this.materialService.getAllMaterials();
      res.status(200).json(materials);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch materials' });
    }
  };

  // Get material by ID
  getMaterialById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const material = await this.materialService.getMaterialById(id);
      if (material) {
        res.status(200).json(material);
      } else {
        res.status(404).json({ error: 'Material not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch material by ID' });
    }
  };

  // Create a new material
  createMaterial = async (req: Request, res: Response): Promise<void> => {
    const material: Material = req.body;
    try {
      const createdMaterial = await this.materialService.createMaterial(material);
      res.status(201).json(createdMaterial);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create material' });
    }
  };

  // Update a material by ID
  updateMaterialById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const updatedMaterial: Partial<Material> = req.body;
    try {
      const material = await this.materialService.updateMaterialById(id, updatedMaterial);
      if (material) {
        res.status(200).json(material);
      } else {
        res.status(404).json({ error: 'Material not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update material' });
    }
  };

  // Delete a material by ID
  deleteMaterialById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.materialService.deleteMaterialById(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete material' });
    }
  };

  // Add a price to a material by ID
  addPriceToMaterial = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const price: Price = req.body;
    try {
      const material = await this.materialService.addPriceToMaterial(id, price);
      if (material) {
        res.status(200).json(material);
      } else {
        res.status(404).json({ error: 'Material not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to add price to material' });
    }
  };
}
