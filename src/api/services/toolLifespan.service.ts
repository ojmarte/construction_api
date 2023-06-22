import ToolLifespanModel, { ToolLifespan } from '../models/toolLifespan.model';

export class ToolLifespanService {
  public async createToolLifespan(ToolLifespan: ToolLifespan): Promise<ToolLifespan> {
    try {
      const createdToolLifespan = await ToolLifespanModel.create(ToolLifespan);
      return createdToolLifespan;
    } catch (error) {
      throw new Error('Failed to create ToolLifespan');
    }
  }

  public async getToolLifespanById(toolId: string): Promise<ToolLifespan | null> {
    try {
      const toolLifespan = await ToolLifespanModel.findById(toolId);
      return toolLifespan;
    } catch (error) {
      throw new Error('Failed to retrieve ToolLifespan');
    }
  }

  public async updateToolLifespan(toolId: string, updatedTool: ToolLifespan): Promise<ToolLifespan | null> {
    try {
      const toolLifespan = await ToolLifespanModel.findByIdAndUpdate(toolId, updatedTool, { new: true });
      return toolLifespan;
    } catch (error) {
      throw new Error('Failed to update ToolLifespan');
    }
  }

  public async deleteToolLifespan(toolId: string): Promise<void> {
    try {
      await ToolLifespanModel.findByIdAndDelete(toolId);
    } catch (error) {
      throw new Error('Failed to delete ToolLifespan');
    }
  }

  public async getAllToolsLifespan(): Promise<ToolLifespan[]> {
    try {
      const toolLifespan = await ToolLifespanModel.find();
      return toolLifespan;
    } catch (error) {
      throw new Error('Failed to retrieve ToolLifespan');
    }
  }
}
