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
 * /api/tools/{id}:
 *   get:
 *     summary: Get a tool by ID
 *     tags: [Tools]
 *     parameters:
 *       - in: path
 *         name: id
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

// GET /tools/:id
router.get('/tools/:id', toolController.getToolById);

/**
 * @swagger
 * /api/tools:
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

// POST /tools
router.post('/tools', toolController.createTool);

/**
 * @swagger
 * /api/tools/{id}:
 *   put:
 *     summary: Update a tool by ID
 *     tags: [Tools]
 *     parameters:
 *       - in: path
 *         name: id
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

// PUT /tools/:id
router.put('/tools/:id', toolController.updateToolById);

/**
 * @swagger
 * /api/tools/{id}:
 *   delete:
 *     summary: Delete a tool by ID
 *     tags: [Tools]
 *     parameters:
 *       - in: path
 *         name: id
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

// DELETE /tools/:id
router.delete('/tools/:id', toolController.deleteToolById);

/**
 * @swagger
 * /api/tools/{id}/price:
 *   post:
 *     summary: Add price to a tool
 *     tags: [Tools]
 *     parameters:
 *       - in: path
 *         name: id
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

// POST /tools/:id/price
router.post('/tools/:id/price', toolController.addPriceToTool);

export default router;
