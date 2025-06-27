import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import { validateUser } from './middlewares/validateUser.js';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', validateUser, userRoutes);

// Manejo de errores
app.use(errorHandler);

export default app;