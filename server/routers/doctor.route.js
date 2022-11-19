const express = require('express')
const router = express.Router()

router.route('/fetch').get((req, res, next) => {
    res.json("Deneme");
});

module.exports = router;