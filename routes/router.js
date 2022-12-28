const router = require('express').Router();
const path = require('path');
const rootDirPath = require('../utils/path')

const test = []
const context = { test, partialContent: 'This is dynamically inserted to partial file' };

router.get('/', (req, res, next)=> {
    res.render(path.join(rootDirPath, 'views', 'user-form.ejs'), context);
})

router.post('/update-name', (req, res, next) => {
    test.push(req.body.user)
    console.log(test);
    console.log(`inserted ${req.body.user} to user list`);
    res.redirect('/')

})

router.get('/users', (req, res, next)=>{
    res.render(path.join(rootDirPath, 'views', 'users-list.ejs'), context);
})
module.exports = router;
