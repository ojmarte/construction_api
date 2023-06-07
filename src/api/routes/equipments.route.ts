import { Router } from 'express';
import { EquipmentController } from '../controllers/equipments.controller';

const router = Router();
const equipmentController = new EquipmentController();

// GET /equipment
router.get('/equipment', equipmentController.getAllEquipment);

// GET /equipment/:id
router.get('/equipment/:id', equipmentController.getEquipmentById);

// POST /equipment
router.post('/equipment', equipmentController.createEquipment);

// PUT /equipment/:id
router.put('/equipment/:id', equipmentController.updateEquipmentById);

// DELETE /equipment/:id
router.delete('/equipment/:id', equipmentController.deleteEquipmentById);

// POST /equipment/:id/price
router.post('/equipment/:id/price', equipmentController.addPriceToEquipment);

export default router;
