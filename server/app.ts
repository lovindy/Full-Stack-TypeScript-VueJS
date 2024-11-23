// app.ts
import express from 'express';
import type { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan'

const app: Express = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello, World!' });
});

// Routes
app.get('/api/v1/health', (req: Request, res: Response) => {
    res.json({ status: 'OK' });
});

app.get('/api/v1/test', (req: Request, res: Response) => {
    res.json({ message: 'API is working!' });
});

// Error handling middleware - needs all 4 parameters
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

export default app;