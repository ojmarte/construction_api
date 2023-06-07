import { Request, Response } from 'express';
import { Tool, Price } from '../models/tools.model';
import { ToolService } from '../services/tools.service';

export class ToolController {
  private toolService: ToolService;

  constructor() {
    this.toolService = new ToolService();
  }

  // Get all tools
  getAllTools = async (_req: Request, res: Response): Promise<void> => {
    try {
      const tools = await this.toolService.getAllTools();
      res.status(200).json(tools);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tools' });
    }
  };

  // Get tool by ID
  getToolById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const tool = await this.toolService.getToolById(id);
      if (tool) {
        res.status(200).json(tool);
      } else {
        res.status(404).json({ error: 'Tool not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tool' });
    }
  };

  // Create a new tool
  createTool = async (req: Request, res: Response): Promise<void> => {
    const tool: Tool = req.body;
    try {
      const createdTool = await this.toolService.createTool(tool);
      res.status(201).json(createdTool);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create tool' });
    }
  };

  // Update a tool by ID
  updateToolById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const updatedTool: Partial<Tool> = req.body;
    try {
      const tool = await this.toolService.updateToolById(id, updatedTool);
      if (tool) {
        res.status(200).json(tool);
      } else {
        res.status(404).json({ error: 'Tool not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update tool' });
    }
  };

  // Delete a tool by ID
  deleteToolById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      await this.toolService.deleteToolById(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete tool' });
    }
  };

  // Add a price to a tool by ID
  addPriceToTool = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const price: Price = req.body;
    try {
      const tool = await this.toolService.addPriceToTool(id, price);
      if (tool) {
        res.status(200).json(tool);
      } else {
        res.status(404).json({ error: 'Tool not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to add price to tool' });
    }
  };
}
