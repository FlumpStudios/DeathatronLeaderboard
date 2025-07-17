import express from 'express';
import { getLeaderboard, addScore } from '../controllers/leaderboardController.js';

const router = express.Router();

router.get('/', getLeaderboard);
router.post('/', addScore);

/**
 * @swagger
 * /api/leaderboard:
 *   get:
 *     summary: Get the top scores
 *     responses:
 *       200:
 *         description: A list of scores
 */
router.get('/', getLeaderboard);

/**
 * @swagger
 * /api/leaderboard:
 *   post:
 *     summary: Add a new score
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - player
 *               - score
 *             properties:
 *               player:
 *                 type: string
 *               score:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Score added successfully
 */
router.post('/', addScore);

export default router;