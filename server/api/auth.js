import express from 'express';

const auth = express.Router();

auth.get('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: authentication (get)' });
});

auth.post('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: authentication (post)' });
});

auth.put('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: authentication (put)' });
});

auth.delete('/', (req, res) => {
    return res.status(200).json({ msg: 'SERVER API: authentication (delete)' });
});

export { auth };