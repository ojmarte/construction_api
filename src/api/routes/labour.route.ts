import { Router } from 'express';
import { LabourController } from '../controllers/labour.controller';

const router = Router();
const labourController = new LabourController();

// GET /labour
router.get('/labour', labourController.getAllLabourProfessions);

// GET /labour/:id
router.get('/labour/:id', labourController.getLabourById);

// POST /labour
router.post('/labour', labourController.createLabourProfession);

// PUT /labour/:id
router.put('/labour/:id', labourController.updateLabourProfessionById);

// DELETE /labour/:id
router.delete('/labour/:id', labourController.deleteLabourProfessionById);

// POST /labour/:id/rate
router.post('/labour/:id/rate', labourController.addRateToLabourProfession);

export default router;
