import { Router } from 'express';
import { MaterialController } from '../controllers/material.controller';

const router = Router();
const materialController = new MaterialController();

/**
 * @swagger
 * tags:
 *   name: Materials
 *   description: API endpoints for managing materials
 */

/**
 * @swagger
 * /api/materials:
 *   get:
 *     summary: Get all materials
 *     tags: [Materials]
 *     responses:
 *       200:
 *         description: Successful operation
 */

// GET /materials
router.get('/materials', materialController.getAllMaterials);

/**
 * @swagger
 * /api/materials/{id}:
 *   get:
 *     summary: Get a material by ID
 *     tags: [Materials]
 *     parameters:
 *       - in: path
 *         name: id
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

// GET /materials/:id
router.get('/materials/:id', materialController.getMaterialById);

/**
 * @swagger
 * /api/materials:
 *   post:
 *     summary: Create a new material
 *     tags: [Materials]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Material'
 *     responses:
 *       201:
 *         description: Material created successfully
 *       400:
 *         description: Invalid request
 */

// POST /materials
router.post('/materials', materialController.createMaterial);

/**
 * @swagger
 * /api/materials/{id}:
 *   put:
 *     summary: Update a material by ID
 *     tags: [Materials]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Material ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Material'
 *     responses:
 *       200:
 *         description: Material updated successfully
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Material not found
 */

// PUT /materials/:id
router.put('/materials/:id', materialController.updateMaterialById);

/**
 * @swagger
 * /api/materials/{id}:
 *   delete:
 *     summary: Delete a material by ID
 *     tags: [Materials]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Material ID
 *     responses:
 *       204:
 *         description: Material deleted successfully
 *       404:
 *         description: Material not found
 */

// DELETE /materials/:id
router.delete('/materials/:id', materialController.deleteMaterialById);

/**
 * @swagger
 * /api/materials/{id}/price:
 *   post:
 *     summary: Add price to a material
 *     tags: [Materials]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Material ID
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
 *         description: Material not found
 */

// POST /materials/:id/price
router.post('/materials/:id/price', materialController.addPriceToMaterial);

export default router;
