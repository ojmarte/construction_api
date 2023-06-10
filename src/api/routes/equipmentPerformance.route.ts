import { Router } from 'express';
import { EquipmentPerformanceController } from '../controllers/equipmentPerformance.controller';

const router = Router();
const equipmentPerformanceController = new EquipmentPerformanceController();

/**
 * @swagger
 * tags:
 *   name: EquipmentPerformance
 *   description: API endpoints for managing equipment performance
 */

/**
 * @swagger
 * components:
 *   schemas:
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
 * /api/equipment-performance:
 *   post:
 *     summary: Create a new equipment performance
 *     tags: [EquipmentPerformance]
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

// POST /equipment-performance
router.post('/equipment-performance', equipmentPerformanceController.createEquipmentPerformance);

/**
 * @swagger
 * /api/equipment-performance:
 *   get:
 *     summary: Get all equipment performances
 *     tags: [EquipmentPerformance]
 *     responses:
 *       200:
 *         description: Successful operation
 */

// GET /equipment-performance
router.get('/equipment-performance', equipmentPerformanceController.getAllEquipmentPerformances);

/**
 * @swagger
 * /api/equipment-performance/{id}:
 *   get:
 *     summary: Get an equipment performance by ID
 *     tags: [EquipmentPerformance]
 *     parameters:
 *       - in: path
 *         name: id
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

// GET /equipment-performance/:id
router.get('/equipment-performance/:id', equipmentPerformanceController.getEquipmentPerformanceById);

/**
 * @swagger
 * /api/equipment/{equipmentId}/equipment-performance:
 *   get:
 *     summary: Get equipment performances by equipment ID
 *     tags: [EquipmentPerformance]
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

// GET /equipment/:equipmentId/equipment-performance
router.get('/equipment/:equipmentId/equipment-performance', equipmentPerformanceController.getEquipmentPerformancesByEquipmentId);

/**
 * @swagger
 * /api/equipment-performance/{id}:
 *   put:
 *     summary: Update an equipment performance by ID
 *     tags: [EquipmentPerformance]
 *     parameters:
 *       - in: path
 *         name: id
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

// PUT /equipment-performance/:id
router.put('/equipment-performance/:id', equipmentPerformanceController.updateEquipmentPerformanceById);

/**
 * @swagger
 * /api/equipment-performance/{id}:
 *   delete:
 *     summary: Delete an equipment performance by ID
 *     tags: [EquipmentPerformance]
 *     parameters:
 *       - in: path
 *         name: id
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

// DELETE /equipment-performance/:id
router.delete('/equipment-performance/:id', equipmentPerformanceController.deleteEquipmentPerformanceById);

export default router;
