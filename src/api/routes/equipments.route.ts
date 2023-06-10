import { Router } from 'express';
import { EquipmentController } from '../controllers/equipments.controller';

const router = Router();
const equipmentController = new EquipmentController();

/**
 * @swagger
 * tags:
 *   name: Equipment
 *   description: API endpoints for managing equipment
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Equipment:
 *       type: object
 *       properties:
 *         equipment_name:
 *           type: string
 *           description: The name of the equipment
 *         category:
 *           type: string
 *           description: The category of the equipment
 *         unit:
 *           type: object
 *           properties:
 *             measurement:
 *               type: string
 *               description: The measurement unit of the equipment
 *             currency:
 *               type: string
 *               description: The currency unit of the equipment
 *         prices:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               value:
 *                 type: number
 *                 description: The price value
 *               date:
 *                 type: string
 *                 format: date
 *                 description: The date of the price
 *       required:
 *         - equipment_name
 *         - category
 *         - unit
 *         - prices
 */

/**
 * @swagger
 * /api/equipment:
 *   get:
 *     summary: Get all equipment
 *     tags: [Equipment]
 *     responses:
 *       200:
 *         description: Successful operation
 */

// GET /equipment
router.get('/equipment', equipmentController.getAllEquipment);

/**
 * @swagger
 * /api/equipment/{id}:
 *   get:
 *     summary: Get an equipment by ID
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Equipment ID
 *     responses:
 *       200:
 *         description: Successful operation
 *       404:
 *         description: Equipment not found
 */

// GET /equipment/:id
router.get('/equipment/:id', equipmentController.getEquipmentById);

/**
 * @swagger
 * /api/equipment:
 *   post:
 *     summary: Create a new equipment
 *     tags: [Equipment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Equipment'
 *     responses:
 *       201:
 *         description: Equipment created successfully
 *       400:
 *         description: Invalid request
 */

// POST /equipment
router.post('/equipment', equipmentController.createEquipment);

/**
 * @swagger
 * /api/equipment/{id}:
 *   put:
 *     summary: Update an equipment by ID
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Equipment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Equipment'
 *     responses:
 *       200:
 *         description: Equipment updated successfully
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Equipment not found
 */

// PUT /equipment/:id
router.put('/equipment/:id', equipmentController.updateEquipmentById);

/**
 * @swagger
 * /api/equipment/{id}:
 *   delete:
 *     summary: Delete an equipment by ID
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Equipment ID
 *     responses:
 *       204:
 *         description: Equipment deleted successfully
 *       404:
 *         description: Equipment not found
 */

// DELETE /equipment/:id
router.delete('/equipment/:id', equipmentController.deleteEquipmentById);

/**
 * @swagger
 * /api/equipment/{id}/price:
 *   post:
 *     summary: Add price to an equipment
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Equipment ID
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
 *         description: Equipment not found
 */

// POST /equipment/:id/price
router.post('/equipment/:id/price', equipmentController.addPriceToEquipment);

export default router;
