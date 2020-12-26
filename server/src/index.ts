import dotenv from 'dotenv';
import express from 'express';

// initialize configuration
dotenv.config();

// rest of the code remains same
const port = process.env.SERVER_PORT;
const app = express();

// define a route handler for the default home page
app.get('/', (req, res) => res.send('Express + TypeScript Server'));

// start the express server
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
