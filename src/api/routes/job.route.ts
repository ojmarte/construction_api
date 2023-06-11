import { Router } from 'express';
import { JobController } from '../controllers/job.controller';

const router = Router();
const jobController = new JobController();

/**
 * @swagger
 * tags:
 *   name: Jobs
 *   description: API endpoints for managing jobs
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Job:
 *       type: object
 *       properties:
 *         job_name:
 *           type: string
 *           description: The name of the job
 *         job_yield:
 *           type: object
 *           properties:
 *             unit:
 *               type: string
 *               description: The unit of job yield
 *             value:
 *               type: number
 *               description: The value of job yield
 *         job_date:
 *           type: string
 *           format: date-time
 *           description: The date of the job
 *         worker_group:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               worker_id:
 *                 type: string
 *                 description: The ID of the worker
 *               quantity:
 *                 type: number
 *                 description: The quantity of workers
 *         tool_group:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               tool_id:
 *                 type: string
 *                 description: The ID of the tool
 *               value:
 *                 type: number
 *                 description: The value of the tool
 *         equipment_group:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               equipment_id:
 *                 type: string
 *                 description: The ID of the equipment
 *               value:
 *                 type: number
 *                 description: The value of the equipment
 *       required:
 *         - job_name
 *         - job_yield
 *         - job_date
 *         - worker_group
 *         - tool_group
 *         - equipment_group
 */

/**
 * @swagger
 * /api/jobs:
 *   post:
 *     summary: Create a new job
 *     tags: [Job]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Job'
 *     responses:
 *       201:
 *         description: Job created successfully
 *       400:
 *         description: Invalid request
 */

// POST /jobs
router.post('/jobs', jobController.createJob);

/**
 * @swagger
 * /api/jobs/{id}:
 *   put:
 *     summary: Update a job by ID
 *     tags: [Job]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Job ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Job'
 *     responses:
 *       200:
 *         description: Job updated successfully
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Job not found
 */

// PUT /job/:id
router.put('/jobs/:id', jobController.updateJob);

/**
 * @swagger
 * /api/jobs/{id}:
 *   get:
 *     summary: Get a job by ID
 *     tags: [Job]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Job ID
 *     responses:
 *       200:
 *         description: Successful operation
 *       404:
 *         description: Job not found
 */

// GET /jobs/:id
router.get('/jobs/:id', jobController.getJobById);

/**
 * @swagger
 * /api/jobs:
 *   get:
 *     summary: Get all jobs
 *     tags: [Job]
 *     responses:
 *       200:
 *         description: Successful operation
 */

// GET /jobs
router.get('/jobs', jobController.getAllJobs);

/**
 * @swagger
 * /api/jobs/{id}:
 *   delete:
 *     summary: Delete a job by ID
 *     tags: [Job]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Job ID
 *     responses:
 *       204:
 *         description: Job deleted successfully
 *       404:
 *         description: Job not found
 */

// DELETE /jobs/:id
router.delete('/jobs/:id', jobController.deleteJob);

export default router;
