import { Router } from 'express';
import { ToolController } from '../controllers/tools.controller';
import { ToolLifespanController } from '../controllers/toolLifespan.controller';

const router = Router();
const toolController = new ToolController();
const toolLifespanController = new ToolLifespanController()

/**
 * @swagger
 * tags:
 *   name: Tools
 *   description: API endpoints for managing tools
 */

/**
 * @swagger
 * tags:
 *   name: Tool Lifespan
 *   description: API endpoints for managing ToolLifespans
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
 * 
 *     ToolLifespan:
 *       type: object
 *       properties:
 *         tool_id:
 *           type: string
 *           description: The ID of the tool
 *         tool_name:
 *           type: string
 *           description: The name of the tool
 *         tool_type:
 *           type: string
 *           description: The type of the tool
 *         manufacturer:
 *           type: string
 *           description: The manufacturer of the tool
 *         lifespan:
 *           type: number
 *           description: The lifespan of the tool
 *         notes:
 *           type: string
 *           description: Additional notes about the tool
 *       required:
 *         - tool_id
 *         - tool_name
 *         - tool_type
 *         - manufacturer
 *         - lifespan
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


/**
 * @swagger
 * /api/tool/lifespan:
 *   post:
 *     summary: Create a new tool lifespan
 *     tags: [Tool Lifespan]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ToolLifespan'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToolLifespan'
 *       500:
 *         description: Failed to create tool lifespan
 */

// POST /tool/lifespan
router.post('/tool/lifespan', toolLifespanController.createToolLifespan);

/**
 * @swagger
 * /api/tool/lifespan/{toolId}:
 *   get:
 *     summary: Get tool lifespan by ID
 *     tags: [Tool Lifespan]
 *     parameters:
 *       - in: path
 *         name: toolId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the tool
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToolLifespan'
 *       '404':
 *         description: Tool lifespan not found
 *       '500':
 *         description: Internal server error
 */

// GET /api/tool/lifespan/:toolId
router.get('/tool/lifespan/:toolId', toolLifespanController.getToolLifespanById);

/**
 * @swagger
 * /api/tools/lifespan/{toolId}:
 *   put:
 *     summary: Update tool lifespan by ID
 *     tags: [Tool Lifespan]
 *     parameters:
 *       - in: path
 *         name: toolId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the tool
 *       - in: body
 *         name: toolLifespan
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/ToolLifespan'
 *         description: The updated tool lifespan object
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToolLifespan'
 *       '400':
 *         description: Invalid request body
 *       '404':
 *         description: Tool lifespan not found
 *       '500':
 *         description: Internal server error
 */

// PUT /api/tools/lifespan/:toolId
router.put('/tools/lifespan/:toolId', toolLifespanController.updateToolLifespan);

/**
 * @swagger
 * /api/tool/lifespan/{toolId}:
 *   delete:
 *     summary: Delete tool lifespan by ID
 *     tags: [Tool Lifespan]
 *     parameters:
 *       - in: path
 *         name: toolId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the tool
 *     responses:
 *       '204':
 *         description: Tool lifespan successfully deleted
 *       '404':
 *         description: Tool lifespan not found
 *       '500':
 *         description: Internal server error
 */

// DELETE /api/tool/lifespan/:toolId
router.delete('/tool/lifespan/:toolId', toolLifespanController.deleteToolLifespan);

/**
 * @swagger
 * /api/tools/lifespan:
 *   get:
 *     summary: Get all tools' lifespan
 *     tags: [Tool Lifespan]
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ToolLifespan'
 *       '500':
 *         description: Internal server error
 */

// GET /api/tools/lifespan
router.get('/tools/lifespan', toolLifespanController.getAllToolsLifespan);


export default router;
