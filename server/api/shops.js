import express from 'express';

const shops = express.Router();

shops.get('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: shops (get)' });
});

shops.post('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: shops (post)' });
});

shops.put('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: shops (put)' });
});

shops.delete('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: shops (delete)' });
});

export { shops };