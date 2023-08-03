import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { api } from './api/api.js';
import { SERVER_PORT, TITLE } from './env.js';

const app = express();

app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
    return res.send('SERVER: home page');
});

app.use('/api', api);

app.get('*', (req, res) => {
    return res.send('SERVER: 404 page');
});

app.use((req, res, next) => {
    return res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(SERVER_PORT, () => {
    console.log(`Server "${TITLE}" on http://localhost:${SERVER_PORT}`);
});