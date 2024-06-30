/**
 * @module swagger
 * Archivo swagger
 */
import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'API Surprise',
    description: 'Descripción de la API',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['../routes/index.js'];

swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
  await import('../server.js');
});