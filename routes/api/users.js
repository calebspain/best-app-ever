const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.send('The users route is working');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
