import { Router } from 'express';
import { EquipmentPerformanceController } from '../controllers/equipmentPerformance.controller';

const router = Router();
const equipmentPerformanceController = new EquipmentPerformanceController();

// POST /equipment-performance
router.post('/equipment-performance', equipmentPerformanceController.createEquipmentPerformance);

// GET /equipment-performance
router.get('/equipment-performance', equipmentPerformanceController.getAllEquipmentPerformances);

// GET /equipment-performance/:id
router.get('/equipment-performance/:id', equipmentPerformanceController.getEquipmentPerformanceById);

// GET /equipment/:equipmentId/equipment-performance
router.get('/equipment/:equipmentId/equipment-performance', equipmentPerformanceController.getEquipmentPerformancesByEquipmentId);

// PUT /equipment-performance/:id
router.put('/equipment-performance/:id', equipmentPerformanceController.updateEquipmentPerformanceById);

// DELETE /equipment-performance/:id
router.delete('/equipment-performance/:id', equipmentPerformanceController.deleteEquipmentPerformanceById);

export default router;
