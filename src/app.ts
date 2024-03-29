import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

// Import your routes here
import equipmentRoutes from './api/routes/equipments.route';
import workerRoutes from './api/routes/worker.route';
import materialRoutes from './api/routes/material.route';
import toolRoutes from './api/routes/tools.route';
import jobRoutes from './api/routes/job.route';

import setupSwagger from '../swagger';

// Import your database configuration here
import connectToDatabase from './config/database';

// Create the Express application
const app: Application = express();

// Add this line to set up the Swagger documentation
setupSwagger(app);

// Apply middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('combined'));
app.use(cors());

// Register your routes here
app.use('/api', equipmentRoutes);
app.use('/api', workerRoutes);
app.use('/api', materialRoutes);
app.use('/api', toolRoutes);
app.use('/api', jobRoutes);

// Define a default route
app.get('/', (_req, res) => {
  res.send('Welcome to the API!');
});

dotenv.config();

// Connect to the database
connectToDatabase()
  .then(() => {
    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error: Error) => {
    console.error('Failed to connect to the database:', error);
  });
