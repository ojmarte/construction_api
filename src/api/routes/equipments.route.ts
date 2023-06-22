import { Router } from 'express';
import { EquipmentController } from '../controllers/equipments.controller';
import { EquipmentPerformanceController } from '../controllers/equipmentPerformance.controller';

const router = Router();
const equipmentController = new EquipmentController();
const equipmentPerformanceController = new EquipmentPerformanceController();

/**
 * @swagger
 * tags:
 *   name: Equipment
 *   description: API endpoints for managing equipment
 */

/**
 * @swagger
 * tags:
 *   name: Equipment Performance
 *   description: API endpoints for managing equipment performance
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
 *     EquipmentPerformance:
 *       type: object
 *       properties:
 *         equipment_id:
 *           type: string
 *           format: uuid
 *           description: The ID of the equipment
 *         equipment_type:
 *           type: string
 *           description: The type of the equipment
 *         condition:
 *           type: string
 *           description: The condition of the equipment
 *         performance_name:
 *           type: string
 *           description: The name of the performance
 *         unit:
 *           type: string
 *           description: The unit of measurement for the performance
 *         performance_value:
 *           type: number
 *           description: The value of the performance
 *         year:
 *           type: number
 *           description: The year of the performance
 *       required:
 *         - equipment_id
 *         - equipment_type
 *         - condition
 *         - performance_name
 *         - unit
 *         - performance_value
 *         - year
 */

/**
 * @swagger
 * /api/equipments:
 *   get:
 *     summary: Get all equipment
 *     tags: [Equipment]
 *     responses:
 *       200:
 *         description: Successful operation
 */

// GET /equipment
router.get('/equipments', equipmentController.getAllEquipment);

/**
 * @swagger
 * /api/equipment/{equipmentId}:
 *   get:
 *     summary: Get an equipment by ID
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: equipmentId
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

// GET /equipment/:equipmentId
router.get('/equipment/:equipmentId', equipmentController.getEquipmentById);

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
 * /api/equipment/{equipmentId}:
 *   put:
 *     summary: Update an equipment by ID
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: equipmentId
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

// PUT /equipment/:equipmentId
router.put('/equipment/:equipmentId', equipmentController.updateEquipmentById);

/**
 * @swagger
 * /api/equipment/{equipmentId}:
 *   delete:
 *     summary: Delete an equipment by ID
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: equipmentId
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

// DELETE /equipment/:equipmentId
router.delete('/equipment/:equipmentId', equipmentController.deleteEquipmentById);

/**
 * @swagger
 * /api/equipment/{equipmentId}/price:
 *   post:
 *     summary: Add price to an equipment
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: equipmentId
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

// POST /equipment/:equipmentId/price
router.post('/equipment/:equipmentId/price', equipmentController.addPriceToEquipment);

/**
 * @swagger
 * /api/equipment/performance:
 *   post:
 *     summary: Create a new equipment performance
 *     tags: [Equipment Performance]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EquipmentPerformance'
 *     responses:
 *       201:
 *         description: Equipment performance created successfully
 *       400:
 *         description: Invalid request
 */

// POST /equipment/performance
router.post('/equipment/performance', equipmentPerformanceController.createEquipmentPerformance);

/**
 * @swagger
 * /api/equipments/performance:
 *   get:
 *     summary: Get all equipment performances
 *     tags: [Equipment Performance]
 *     responses:
 *       200:
 *         description: Successful operation
 */

// GET /equipments/performance
router.get('/equipments/performance', equipmentPerformanceController.getAllEquipmentPerformances);

/**
 * @swagger
 * /api/equipment/performance/{equipmentId}:
 *   get:
 *     summary: Get an equipment performance by ID
 *     tags: [Equipment Performance]
 *     parameters:
 *       - in: path
 *         name: equipmentId
 *         schema:
 *           type: string
 *         required: true
 *         description: Equipment performance ID
 *     responses:
 *       200:
 *         description: Successful operation
 *       404:
 *         description: Equipment performance not found
 */

// GET /equipment/performance/:equipmentId
router.get('/equipment/performance/:id', equipmentPerformanceController.getEquipmentPerformanceById);

/**
 * @swagger
 * /api/equipment/performance/{equipmentId}:
 *   get:
 *     summary: Get equipment performances by equipment ID
 *     tags: [Equipment Performance]
 *     parameters:
 *       - in: path
 *         name: equipmentId
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

// GET /equipment/performance/:equipmentId
router.get('/equipment/performance/:equipmentId', equipmentPerformanceController.getEquipmentPerformancesByEquipmentId);

/**
 * @swagger
 * /api/equipment/performance/{equipmentId}:
 *   put:
 *     summary: Update an equipment performance by ID
 *     tags: [Equipment Performance]
 *     parameters:
 *       - in: path
 *         name: equipmentId
 *         schema:
 *           type: string
 *         required: true
 *         description: Equipment performance ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EquipmentPerformance'
 *     responses:
 *       200:
 *         description: Equipment performance updated successfully
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Equipment performance not found
 */

// PUT /equipment/performance/:equipmentId
router.put('/equipment/performance/:equipmentId', equipmentPerformanceController.updateEquipmentPerformanceById);

/**
 * @swagger
 * /api/equipment/performance/{equipmentId}:
 *   delete:
 *     summary: Delete an equipment performance by ID
 *     tags: [Equipment Performance]
 *     parameters:
 *       - in: path
 *         name: equipmentId
 *         schema:
 *           type: string
 *         required: true
 *         description: Equipment performance ID
 *     responses:
 *       204:
 *         description: Equipment performance deleted successfully
 *       404:
 *         description: Equipment performance not found
 */

// DELETE /equipment-performance/:equipmentId
router.delete('/equipment/performance/:equipmentId', equipmentPerformanceController.deleteEquipmentPerformanceById);

export default router;
