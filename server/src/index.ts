import express from 'express';

// rest of the code remains same
const port = 5000;
const app = express();

// define a route handler for the default home page
app.get('/', (req, res) => res.send('Express + TypeScript Server'));

// start the express server
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
