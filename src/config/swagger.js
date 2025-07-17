import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Leaderboard API',
      version: '1.0.0',
      description: 'Simple API for managing a game leaderboard',
    },
    servers: [
      {
        url: 'http://localhost:3000', // or use process.env.PORT
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Where to look for JSDoc comments
};

const swaggerSpec = swaggerJsdoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log('Swagger docs available at /api-docs');
}

export default setupSwagger;