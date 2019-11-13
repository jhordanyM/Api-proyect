const { Router } = require('express');
const router = Router();

router.get('/dany', (req, res) => {
    const data = {
        "name": "jhordany",
        "web": "Ces"
    };
    res.json(data);
});

module.exports = router;