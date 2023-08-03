import express from 'express';

const products = express.Router();

products.get('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: products (get)' });
});

products.post('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: products (post)' });
});

products.put('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: products (put)' });
});

products.delete('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: products (delete)' });
});

export { products };