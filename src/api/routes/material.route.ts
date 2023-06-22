import { Router } from 'express';
import { MaterialController } from '../controllers/material.controller';
import { MaterialYieldController } from '../controllers/materialYield.controller';

const router = Router();
const materialController = new MaterialController();
const materialYieldController = new MaterialYieldController();

/**
 * @swagger
 * tags:
 *   name: Materials
 *   description: API endpoints for managing materials
 */

/**
 * @swagger
 * tags:
 *   name: Material Yields
 *   description: API endpoints for managing material yields
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Material:
 *       type: object
 *       properties:
 *         material_name:
 *           type: string
 *           description: The name of the material
 *         category:
 *           type: string
 *           description: The category of the material
 *         unit:
 *           type: object
 *           properties:
 *             measurement:
 *               type: string
 *               description: The measurement unit of the material
 *             currency:
 *               type: string
 *               description: The currency unit of the material
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
 *         - material_name
 *         - category
 *         - unit
 *         - prices
 * 
 *     MaterialYield:
 *       type: object
 *       properties:
 *         material_id:
 *           type: string
 *           format: uuid
 *           description: The ID of the material
 *         yield_name:
 *           type: string
 *           description: The name of the yield
 *         category:
 *           type: string
 *           description: The category of the yield
 *         unit:
 *           type: string
 *           description: The unit of measurement for the yield
 *         yield:
 *           type: number
 *           description: The yield value
 *       required:
 *         - material_id
 *         - yield_name
 *         - category
 *         - unit
 *         - yield
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
 * /api/material/{materialId}:
 *   get:
 *     summary: Get a material by ID
 *     tags: [Materials]
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

// GET /material/:materialId
router.get('/material/:materialId', materialController.getMaterialById);

/**
 * @swagger
 * /api/material:
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
router.post('/material', materialController.createMaterial);

/**
 * @swagger
 * /api/materials/{materialId}:
 *   put:
 *     summary: Update a material by ID
 *     tags: [Materials]
 *     parameters:
 *       - in: path
 *         name: materialId
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

// PUT /material/:id
router.put('/material/:materialId', materialController.updateMaterialById);

/**
 * @swagger
 * /api/material/{materialId}:
 *   delete:
 *     summary: Delete a material by ID
 *     tags: [Materials]
 *     parameters:
 *       - in: path
 *         name: materialId
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

// DELETE /material/:materialId
router.delete('/material/:materialId', materialController.deleteMaterialById);

/**
 * @swagger
 * /api/material/{materialId}/price:
 *   post:
 *     summary: Add price to a material
 *     tags: [Materials]
 *     parameters:
 *       - in: path
 *         name: materialId
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

// POST /material/:id/price
router.post('/material/:materialId/price', materialController.addPriceToMaterial);


/**
 * @swagger
 * /api/material/yield:
 *   post:
 *     summary: Create a new material yield
 *     tags: [Material Yields]
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

// POST /material/yield
router.post('/material/yield', materialYieldController.createMaterialYield);

/**
 * @swagger
 * /api/material/yield/{materialId}:
 *   put:
 *     summary: Update a material yield by ID
 *     tags: [Material Yields]
 *     parameters:
 *       - in: path
 *         name: materialId
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

// PUT /material-yields/:materialId
router.put('/material/yield/:materialId', materialYieldController.updateMaterialYieldById);

/**
 * @swagger
 * /api/material/yield/{materialId}:
 *   delete:
 *     summary: Delete a material yield by ID
 *     tags: [Material Yields]
 *     parameters:
 *       - in: path
 *         name: materialId
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

// DELETE /material/yield/:materialId
router.delete('/material/yield/:materialId', materialYieldController.deleteMaterialYieldById);

/**
 * @swagger
 * /api/materials/yield:
 *   get:
 *     summary: Get all material yields
 *     tags: [Material Yields]
 *     responses:
 *       200:
 *         description: Successful operation
 */

// GET /materials/yield
router.get('/materials/yield', materialYieldController.getAllMaterialYields);

/**
 * @swagger
 * /api/material/yield/{materialId}:
 *   get:
 *     summary: Get a material yield by ID
 *     tags: [Material Yields]
 *     parameters:
 *       - in: path
 *         name: materialId
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

// GET /material/yield/:materialId
router.get('/material/yield/:materialId', materialYieldController.getMaterialYieldById);

/**
 * @swagger
 * /api/material/yield/{materialId}:
 *   get:
 *     summary: Get material yields by material ID
 *     tags: [Material Yields]
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

// GET /material/yield/materialId/:materialId
router.get('/material/yield/materialId/:materialId', materialYieldController.getMaterialYieldsByMaterialId);


export default router;
