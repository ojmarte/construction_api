import { Router } from 'express';
import { ToolController } from '../controllers/tools.controller';

const router = Router();
const toolController = new ToolController();

/**
 * @swagger
 * tags:
 *   name: Tools
 *   description: API endpoints for managing tools
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Tool:
 *       type: object
 *       properties:
 *         tool_name:
 *           type: string
 *           description: The name of the tool
 *         category:
 *           type: string
 *           description: The category of the tool
 *         unit:
 *           type: object
 *           properties:
 *             measurement:
 *               type: string
 *               description: The measurement unit of the tool
 *             currency:
 *               type: string
 *               description: The currency unit of the tool
 *         prices:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *                 description: The price value
 *               date:
 *                 type: string
 *                 format: date
 *                 description: The date of the price
 *       required:
 *         - tool_name
 *         - category
 *         - unit
 *         - prices
 */

/**
 * @swagger
 * /api/tools:
 *   get:
 *     summary: Get all tools
 *     tags: [Tools]
 *     responses:
 *       200:
 *         description: Successful operation
 */

// GET /tools
router.get('/tools', toolController.getAllTools);

/**
 * @swagger
 * /api/tool/{toolId}:
 *   get:
 *     summary: Get a tool by ID
 *     tags: [Tools]
 *     parameters:
 *       - in: path
 *         name: toolId
 *         schema:
 *           type: string
 *         required: true
 *         description: Tool ID
 *     responses:
 *       200:
 *         description: Successful operation
 *       404:
 *         description: Tool not found
 */

// GET /tool/:id
router.get('/tool/:toolId', toolController.getToolById);

/**
 * @swagger
 * /api/tool:
 *   post:
 *     summary: Create a new tool
 *     tags: [Tools]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tool'
 *     responses:
 *       201:
 *         description: Tool created successfully
 *       400:
 *         description: Invalid request
 */

// POST /tool
router.post('/tool', toolController.createTool);

/**
 * @swagger
 * /api/tool/{toolId}:
 *   put:
 *     summary: Update a tool by ID
 *     tags: [Tools]
 *     parameters:
 *       - in: path
 *         name: toolId
 *         schema:
 *           type: string
 *         required: true
 *         description: Tool ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tool'
 *     responses:
 *       200:
 *         description: Tool updated successfully
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Tool not found
 */

// PUT /tool/:toolId
router.put('/tool/:toolId', toolController.updateToolById);

/**
 * @swagger
 * /api/tool/{toolId}:
 *   delete:
 *     summary: Delete a tool by ID
 *     tags: [Tools]
 *     parameters:
 *       - in: path
 *         name: toolId
 *         schema:
 *           type: string
 *         required: true
 *         description: Tool ID
 *     responses:
 *       204:
 *         description: Tool deleted successfully
 *       404:
 *         description: Tool not found
 */

// DELETE /tool/:toolId
router.delete('/tool/:toolId', toolController.deleteToolById);

/**
 * @swagger
 * /api/tool/{toolId}/price:
 *   post:
 *     summary: Add price to a tool
 *     tags: [Tools]
 *     parameters:
 *       - in: path
 *         name: toolId
 *         schema:
 *           type: string
 *         required: true
 *         description: Tool ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *             required:
 *               - price
 *     responses:
 *       200:
 *         description: Price added successfully
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Tool not found
 */

// POST /tool/:toolId/price
router.post('/tool/:toolId/price', toolController.addPriceToTool);

export default router;
