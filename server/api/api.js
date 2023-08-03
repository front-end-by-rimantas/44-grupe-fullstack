import express from 'express';
import { auth } from './auth.js';
import { shops } from './shops.js';
import { products } from './products.js';

const api = express.Router();

api.all('/', (req, res) => {
    return res.status(400).json({ msg: 'SERVER API: error, nedabaigtas URL' });
});

api.use('/auth', auth);
api.use('/shops', shops);
api.use('/products', products);

export { api };