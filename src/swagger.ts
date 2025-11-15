import swaggerAutogen from "swagger-autogen";

const config = {
  info: {
    version: 'v1.0.0',
    title: 'Fatechealth API',
    description: 'Fatechealth API documentation'
  },
  host: 'localhost:3000',
  basePath: '/v1',
  schemes: ['http', 'https'],
  tags: [
    {name: "Auth", description: "Authentication endpoints"},
    {name: "User", description: "User endpoints"},
    {name: "Patient", description: "Patient endpoints"},
  ],
  securityDefinitions: {
    apiKey: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
      description: 'Enter api key',

    }
  },
  definitions: {
    PatientData: {
      $code: "12345",
      $name: "Eduardo"
    },
    PatientDataResponse: {
      $id: "1", 
      $code: "12345",
      $name: "Eduardo"
    }
  }
};

const outputFile = './docs/swagger.json';
const endpoints = ['./src/routes/index.ts'];


swaggerAutogen()(outputFile,endpoints,config);