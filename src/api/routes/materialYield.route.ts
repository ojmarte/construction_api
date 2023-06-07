import { Router } from 'express';
import { MaterialYieldController } from '../controllers/materialYield.controller';

const router = Router();
const materialYieldController = new MaterialYieldController();

// POST /material-yields
router.post('/material-yields', materialYieldController.createMaterialYield);

// PUT /material-yields/:id
router.put('/material-yields/:id', materialYieldController.updateMaterialYieldById);

// DELETE /material-yields/:id
router.delete('/material-yields/:id', materialYieldController.deleteMaterialYieldById);

// GET /material-yields
router.get('/material-yields', materialYieldController.getAllMaterialYields);

// GET /material-yields/:id
router.get('/material-yields/:id', materialYieldController.getMaterialYieldById);

// GET /material-yields/by-material/:materialId
router.get('/material-yields/by-material/:materialId', materialYieldController.getMaterialYieldsByMaterialId);

export default router;
