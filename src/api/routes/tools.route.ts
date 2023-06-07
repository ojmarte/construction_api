import { Router } from 'express';
import { ToolController } from '../controllers/tools.controller';

const router = Router();
const toolController = new ToolController();

// GET /tools
router.get('/tools', toolController.getAllTools);

// GET /tools/:id
router.get('/tools/:id', toolController.getToolById);

// POST /tools
router.post('/tools', toolController.createTool);

// PUT /tools/:id
router.put('/tools/:id', toolController.updateToolById);

// DELETE /tools/:id
router.delete('/tools/:id', toolController.deleteToolById);

// POST /tools/:id/price
router.post('/tools/:id/price', toolController.addPriceToTool);

export default router;
