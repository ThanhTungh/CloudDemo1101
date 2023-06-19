const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    res.render('login');
});

router.get('/check',  async(req, res) => {
    res.render('login');
})
router.post('/check', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === 'admin' && password === '123456') {
        res.render('home', { title: 'Express' });
    } else {
        loginFailed = true;
        res.render('login', { loginFailed });
    }
});
router.get('/logout', async (req, res) => {
    res.redirect('/');
});

module.exports = router;