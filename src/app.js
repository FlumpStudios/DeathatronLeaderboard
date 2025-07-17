import express from 'express';
import leaderboardRoutes from './routes/leaderboardRoutes.js';
import setupSwagger from './config/swagger.js';


const app = express();

app.use(express.json());

// Routes
app.use('/api/leaderboard', leaderboardRoutes);

setupSwagger(app);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app;