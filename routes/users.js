const {Router} = require('express');
const { usersPost, usersUpdate, usersDelete, getSortUsers } = require('../controllers/users');

const router = Router();

router.get('/', getSortUsers);

router.post('/', usersPost);

router.put('/', usersUpdate);

router.delete('/', usersDelete);


module.exports = router;