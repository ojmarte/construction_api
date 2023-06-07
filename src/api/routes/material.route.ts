import { Router } from 'express';
import { MaterialController } from '../controllers/material.controller';

const router = Router();
const materialController = new MaterialController();

// GET /materials
router.get('/materials', materialController.getAllMaterials);

// GET /materials/:id
router.get('/materials/:id', materialController.getMaterialById);

// POST /materials
router.post('/materials', materialController.createMaterial);

// PUT /materials/:id
router.put('/materials/:id', materialController.updateMaterialById);

// DELETE /materials/:id
router.delete('/materials/:id', materialController.deleteMaterialById);

// POST /materials/:id/price
router.post('/materials/:id/price', materialController.addPriceToMaterial);

export default router;
