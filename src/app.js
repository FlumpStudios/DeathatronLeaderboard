import express from 'express';
import leaderboardRoutes from './routes/leaderboardRoutes.js';

const app = express();

app.use(express.json());

// Routes
app.use('/api/leaderboard', leaderboardRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app;