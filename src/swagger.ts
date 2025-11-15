import swaggerAutogen from "swagger-autogen";

const config = {
  info: {
    version: 'v1.0.0',
    title: 'Fatecare API',
    description: 'Fatecare API documentation'
  },
  host: 'localhost:3000',
  basePath: '/api/v1',
  schemes: ['http', 'https'],
  tags: [
    {name: "Auth", description: "Authentication endpoints"},
    {name: "User", description: "User endpoints"},
    {name: "Patient", description: "Patient endpoints"},
  ],
  securityDefinitions: {
    JWT: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description: "JWT Authorization header using the Bearer scheme. Example: \"Bearer {token}\"",
    }
  },
  definitions: {
    PatientSchema: {
      $code: "1288321",
      $name: "Matias Orlando"
    },
    PatientResponseSchema: {
      $id: "1", 
      $code: "1288321",
      $name: "Matias Orlando"
    },
    UserSchema: {
      $username: "eduardo.araujo",
      $password: "papinha123"
    },
    UserResponseSchema: {
      $id: 1,
      $username: "eduardo.araujo",
      $password: "$2b$10$qEjJiPFyRVEQ7W26W/l/GOEfwTHayN7gv/t8UYcW7ElsfavGswuDq"
    },
    LoginSchema: {
      $username: "eduardo.araujo",
      $password: "papinha123"
    },
    LoginResponseSuccessSchema: {
      $message: "Login realizado com sucesso!",
      $token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVkdWFyZG8uYXJhdWpvIiwiaWF0IjoxNjE2MjM5MDIyLCJleHAiOjE2MTYyNDI2MjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    LoginResponseUnauthorizedSchema: {
      $error: "Usuário e/ou senha inválidos ou não informados."
    }
  }
};

const output = './docs/swagger.json';
const endpoints = ['./src/routes/index.ts'];


swaggerAutogen()(output,endpoints,config);