import ToolModel, { Tool, Price } from '../models/tools.model';

export class ToolService {
  // Get all tools
  async getAllTools(): Promise<Tool[]> {
    try {
      const tools = await ToolModel.find();
      return tools;
    } catch (error) {
      throw new Error('Failed to fetch tools');
    }
  }
  // Get Tool by ID
  async getToolById(id: string): Promise<Tool | null> {
    try {
      const tool = await ToolModel.findById(id);
      return tool;
    } catch (error) {
      throw new Error('Failed to fetch tool by ID');
    }
  }

  // Create a new tool
  async createTool(tool: Tool): Promise<Tool> {
    try {
      const createdTool = await ToolModel.create(tool);
      return createdTool;
    } catch (error) {
      throw new Error('Failed to create tool');
    }
  }

  // Update a tool by ID
  async updateToolById(id: string, updatedTool: Partial<Tool>): Promise<Tool | null> {
    try {
      const tool = await ToolModel.findByIdAndUpdate(id, updatedTool, { new: true });
      return tool;
    } catch (error) {
      throw new Error('Failed to update tool');
    }
  }

  // Delete a tool by ID
  async deleteToolById(id: string): Promise<void> {
    try {
      await ToolModel.findByIdAndDelete(id);
    } catch (error) {
      throw new Error('Failed to delete tool');
    }
  }

  // Add a price to a tool by ID
  async addPriceToTool(id: string, price: Price): Promise<Tool | null> {
    try {
      const tool = await ToolModel.findByIdAndUpdate(
        id,
        { $push: { prices: price } },
        { new: true }
      );
      return tool;
    } catch (error) {
      throw new Error('Failed to add price to tool');
    }
  }
}
