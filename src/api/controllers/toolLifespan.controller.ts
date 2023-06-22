import { Request, Response } from 'express';
import { ToolLifespan } from '../models/toolLifespan.model';
import { ToolLifespanService } from '../services/toolLifespan.service';

export class ToolLifespanController {
  private ToolLifespanService: ToolLifespanService;

  constructor() {
    this.ToolLifespanService = new ToolLifespanService();
  }

  public createToolLifespan = async (req: Request, res: Response): Promise<void> => {
    try {
      const toolLifespan: ToolLifespan = req.body;
      const createdToolLifespan = await this.ToolLifespanService.createToolLifespan(toolLifespan);
      res.status(201).json(createdToolLifespan);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create ToolLifespan' });
    }
  };

  public getToolLifespanById = async (req: Request, res: Response): Promise<void> => {
    try {
      const toolId: string = req.params.toolId;
      const toolLifespan = await this.ToolLifespanService.getToolLifespanById(toolId);
      if (toolLifespan) {
        res.json(toolLifespan);
      } else {
        res.status(404).json({ error: 'ToolLifespan not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve ToolLifespan' });
    }
  };

  public updateToolLifespan = async (req: Request, res: Response): Promise<void> => {
    try {
      const toolId: string = req.params.toolId;
      const updatedToolLifespan: ToolLifespan = req.body;
      const toolLifespan = await this.ToolLifespanService.updateToolLifespan(toolId, updatedToolLifespan);
      if (toolLifespan) {
        res.json(toolLifespan);
      } else {
        res.status(404).json({ error: 'ToolLifespan not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update ToolLifespan' });
    }
  };

  public deleteToolLifespan = async (req: Request, res: Response): Promise<void> => {
    try {
      const toolId: string = req.params.toolId;
      await this.ToolLifespanService.deleteToolLifespan(toolId);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete ToolLifespan' });
    }
  };

  public getAllToolsLifespan = async (req: Request, res: Response): Promise<void> => {
    try {
      const toolsLifespan = await this.ToolLifespanService.getAllToolsLifespan();
      res.json(toolsLifespan);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve ToolLifespans' });
    }
  };
}
