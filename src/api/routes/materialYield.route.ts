import { Router } from 'express';
import { MaterialYieldController } from '../controllers/materialYield.controller';

const router = Router();
const materialYieldController = new MaterialYieldController();

/**
 * @swagger
 * tags:
 *   name: MaterialYields
 *   description: API endpoints for managing material yields
 */

/**
 * @swagger
 * /material-yields:
 *   post:
 *     summary: Create a new material yield
 *     tags: [MaterialYields]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MaterialYield'
 *     responses:
 *       201:
 *         description: Material yield created successfully
 *       400:
 *         description: Invalid request
 */

// POST /material-yields
router.post('/material-yields', materialYieldController.createMaterialYield);

/**
 * @swagger
 * /material-yields/{id}:
 *   put:
 *     summary: Update a material yield by ID
 *     tags: [MaterialYields]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Material yield ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MaterialYield'
 *     responses:
 *       200:
 *         description: Material yield updated successfully
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Material yield not found
 */

// PUT /material-yields/:id
router.put('/material-yields/:id', materialYieldController.updateMaterialYieldById);

/**
 * @swagger
 * /material-yields/{id}:
 *   delete:
 *     summary: Delete a material yield by ID
 *     tags: [MaterialYields]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Material yield ID
 *     responses:
 *       204:
 *         description: Material yield deleted successfully
 *       404:
 *         description: Material yield not found
 */

// DELETE /material-yields/:id
router.delete('/material-yields/:id', materialYieldController.deleteMaterialYieldById);

/**
 * @swagger
 * /material-yields:
 *   get:
 *     summary: Get all material yields
 *     tags: [MaterialYields]
 *     responses:
 *       200:
 *         description: Successful operation
 */

// GET /material-yields
router.get('/material-yields', materialYieldController.getAllMaterialYields);

/**
 * @swagger
 * /material-yields/{id}:
 *   get:
 *     summary: Get a material yield by ID
 *     tags: [MaterialYields]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Material yield ID
 *     responses:
 *       200:
 *         description: Successful operation
 *       404:
 *         description: Material yield not found
 */

// GET /material-yields/:id
router.get('/material-yields/:id', materialYieldController.getMaterialYieldById);

/**
 * @swagger
 * /material-yields/by-material/{materialId}:
 *   get:
 *     summary: Get material yields by material ID
 *     tags: [MaterialYields]
 *     parameters:
 *       - in: path
 *         name: materialId
 *         schema:
 *           type: string
 *         required: true
 *         description: Material ID
 *     responses:
 *       200:
 *         description: Successful operation
 *       404:
 *         description: Material not found
 */

// GET /material-yields/by-material/:materialId
router.get('/material-yields/by-material/:materialId', materialYieldController.getMaterialYieldsByMaterialId);

export default router;
