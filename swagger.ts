import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'building-cost-api',
      version: '1.0.0',
      description: 'Your go-to source for construction data. Access material prices, worker rates, and performance metrics for informed decision-making and project optimization. Ideal for developers, contractors, and project managers in the construction industry.',
    },
    basePath: '/', // The base URL of your API
    
  },
  components: {
    schemas: {
      LabourProfession: {
        $ref: './src/swagger/schemas/labourSchema.json',
      },
      Material: {
        $ref: './src/swagger/schemas/materialSchema.json',
      },
      MaterialYield: {
        $ref: './src/swagger/schemas/materialYieldSchema.json',
      },
      Tool: {
        $ref: './src/swagger/schemas/toolsSchema.json',
      },
      Equipment: {
        $ref: './src/swagger/schemas/equipmentsSchema.json',
      },
      EquipmentPerformance: {
        $ref: './src/swagger/schemas/equipmentPerformanceSchema.json',
      },
 
      // Add other schema references here
    },
  },
  apis: ['src/api/routes/*.ts'], // Replace with the path to your API routes
};

const specs = swaggerJsdoc(options);

export default (app: Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
