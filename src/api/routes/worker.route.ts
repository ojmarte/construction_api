import { Router } from 'express';
import { WorkerController } from '../controllers/worker.controller';

const router = Router();
const workerController = new WorkerController();

/**
 * @swagger
 * tags:
 *   name: Worker
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
 * /api/worker:
 *   get:
 *     summary: Get all worker professions
 *     tags: [Worker]
 *     responses:
 *       200:
 *         description: Successful operation
 */

// GET /worker
router.get('/worker', workerController.getAllWorkerProfessions);

/**
 * @swagger
 * /api/worker/{id}:
 *   get:
 *     summary: Get a worker profession by ID
 *     tags: [Worker]
 *     parameters:
 *       - in: path
 *         name: id
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

// GET /worker/:id
router.get('/worker/:id', workerController.getWorkerById);

/**
 * @swagger
 * /api/worker:
 *   post:
 *     summary: Create a new worker profession
 *     tags: [Worker]
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
 * /api/worker/{id}:
 *   put:
 *     summary: Update a worker profession by ID
 *     tags: [Worker]
 *     parameters:
 *       - in: path
 *         name: id
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

// PUT /worker/:id
router.put('/worker/:id', workerController.updateWorkerProfessionById);

/**
 * @swagger
 * /api/worker/{id}:
 *   delete:
 *     summary: Delete a worker profession by ID
 *     tags: [Worker]
 *     parameters:
 *       - in: path
 *         name: id
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

// DELETE /worker/:id
router.delete('/worker/:id', workerController.deleteWorkerProfessionById);

/**
 * @swagger
 * /api/worker/{id}/rate:
 *   post:
 *     summary: Add rate to a worker profession
 *     tags: [Worker]
 *     parameters:
 *       - in: path
 *         name: id
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

// POST /worker/:id/rate
router.post('/worker/:id/rate', workerController.addRateToWorkerProfession);

export default router;
