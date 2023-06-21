import { Router } from 'express';
import { WorkerController } from '../controllers/worker.controller';

const router = Router();
const workerController = new WorkerController();

/**
 * @swagger
 * tags:
 *   name: Workers
 *   description: API endpoints for managing worker professions
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     workerProfession:
 *       type: object
 *       properties:
 *         worker_name:
 *           type: string
 *           description: The name of the worker profession
 *         category:
 *           type: string
 *           description: The category of the worker profession
 *         level:
 *           type: string
 *           description: The level of the worker profession
 *         unit:
 *           type: object
 *           properties:
 *             measurement:
 *               type: string
 *               description: The measurement unit of the worker profession
 *             currency:
 *               type: string
 *               description: The currency unit of the worker profession
 *         rates:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               value:
 *                 type: number
 *                 description: The rate value
 *               date:
 *                 type: string
 *                 format: date
 *                 description: The date of the rate
 *       required:
 *         - worker_name
 *         - category
 *         - level
 *         - unit
 *         - rates
 */

/**
 * @swagger
 * /api/workers:
 *   get:
 *     summary: Get all worker professions
 *     tags: [Workers]
 *     responses:
 *       200:
 *         description: Successful operation
 */

// GET /workers
router.get('/workers', workerController.getAllWorkerProfessions);

/**
 * @swagger
 * /api/worker/{id}:
 *   get:
 *     summary: Get a worker profession by ID
 *     tags: [Workers]
 *     parameters:
 *       - in: path
 *         name: workerId
 *         schema:
 *           type: string
 *         required: true
 *         description: Worker profession ID
 *     responses:
 *       200:
 *         description: Successful operation
 *       404:
 *         description: Worker profession not found
 */

// GET /worker/:workerId
router.get('/worker/:workerId', workerController.getWorkerById);

/**
 * @swagger
 * /api/worker:
 *   post:
 *     summary: Create a new worker profession
 *     tags: [Workers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/workerProfession'
 *     responses:
 *       201:
 *         description: Worker profession created successfully
 *       400:
 *         description: Invalid request
 */

// POST /worker
router.post('/worker', workerController.createWorkerProfession);

/**
 * @swagger
 * /api/worker/{workerId}:
 *   put:
 *     summary: Update a worker profession by ID
 *     tags: [Workers]
 *     parameters:
 *       - in: path
 *         name: workerId
 *         schema:
 *           type: string
 *         required: true
 *         description: worker profession ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/workerProfession'
 *     responses:
 *       200:
 *         description: Worker profession updated successfully
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Worker profession not found
 */

// PUT /worker/:workerId
router.put('/worker/:workerId', workerController.updateWorkerProfessionById);

/**
 * @swagger
 * /api/worker/{workerId}:
 *   delete:
 *     summary: Delete a worker profession by ID
 *     tags: [Workers]
 *     parameters:
 *       - in: path
 *         name: workerId
 *         schema:
 *           type: string
 *         required: true
 *         description: Worker profession ID
 *     responses:
 *       204:
 *         description: Worker profession deleted successfully
 *       404:
 *         description: Worker profession not found
 */

// DELETE /worker/:workerId
router.delete('/worker/:workerId', workerController.deleteWorkerProfessionById);

/**
 * @swagger
 * /api/worker/{id}/rate:
 *   post:
 *     summary: Add rate to a worker profession
 *     tags: [Workers]
 *     parameters:
 *       - in: path
 *         name: workerId
 *         schema:
 *           type: string
 *         required: true
 *         description: Worker profession ID
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
 *         description: Worker profession not found
 */

// POST /worker/:workerId/rate
router.post('/worker/:workerId/rate', workerController.addRateToWorkerProfession);

export default router;
