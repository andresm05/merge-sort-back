const {Router} = require('express');
const { usersGet, usersPost, usersUpdate, usersDelete } = require('../controllers/users');

const router = Router();

router.get('/', usersGet);

router.post('/', usersPost);

router.put('/', usersUpdate);

router.delete('/', usersDelete);


module.exports = router;