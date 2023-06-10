import { Router } from 'express';
import { LabourController } from '../controllers/labour.controller';

const router = Router();
const labourController = new LabourController();

/**
 * @swagger
 * tags:
 *   name: Labour
 *   description: API endpoints for managing labour professions
 */

/**
 * @swagger
 * /labour:
 *   get:
 *     summary: Get all labour professions
 *     tags: [Labour]
 *     responses:
 *       200:
 *         description: Successful operation
 */

// GET /labour
router.get('/labour', labourController.getAllLabourProfessions);

/**
 * @swagger
 * /labour/{id}:
 *   get:
 *     summary: Get a labour profession by ID
 *     tags: [Labour]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Labour profession ID
 *     responses:
 *       200:
 *         description: Successful operation
 *       404:
 *         description: Labour profession not found
 */

// GET /labour/:id
router.get('/labour/:id', labourController.getLabourById);

/**
 * @swagger
 * /labour:
 *   post:
 *     summary: Create a new labour profession
 *     tags: [Labour]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LabourProfession'
 *     responses:
 *       201:
 *         description: Labour profession created successfully
 *       400:
 *         description: Invalid request
 */

// POST /labour
router.post('/labour', labourController.createLabourProfession);

/**
 * @swagger
 * /labour/{id}:
 *   put:
 *     summary: Update a labour profession by ID
 *     tags: [Labour]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Labour profession ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LabourProfession'
 *     responses:
 *       200:
 *         description: Labour profession updated successfully
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Labour profession not found
 */

// PUT /labour/:id
router.put('/labour/:id', labourController.updateLabourProfessionById);

/**
 * @swagger
 * /labour/{id}:
 *   delete:
 *     summary: Delete a labour profession by ID
 *     tags: [Labour]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Labour profession ID
 *     responses:
 *       204:
 *         description: Labour profession deleted successfully
 *       404:
 *         description: Labour profession not found
 */

// DELETE /labour/:id
router.delete('/labour/:id', labourController.deleteLabourProfessionById);

/**
 * @swagger
 * /labour/{id}/rate:
 *   post:
 *     summary: Add rate to a labour profession
 *     tags: [Labour]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Labour profession ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rate:
 *                 type: number
 *             required:
 *               - rate
 *     responses:
 *       200:
 *         description: Rate added successfully
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Labour profession not found
 */

// POST /labour/:id/rate
router.post('/labour/:id/rate', labourController.addRateToLabourProfession);

export default router;