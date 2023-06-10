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
  apis: ['src/api/routes/*.ts'], // Replace with the path to your API routes
};

const specs = swaggerJsdoc(options);

export default (app: Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
