const { Router } = require('express');
const { check } = require('express-validator');

const { categoriaExist
 } = require('../helpers/validaciones')
 const { validateDate } =require('../middlewares/validacionerrores')

const router = Router();

const { artesaniaGet,
        artesaniaPost,
        artesaniaPut,
        artesaniaDelete
 } = require('../controllers/artesanias')

router.get('/', artesaniaGet);

router.post('/',[
    check('categoria').custom(categoriaExist),
    validateDate
], artesaniaPost);

router.put('/', artesaniaPut);

router.delete('/', artesaniaDelete);

module.exports = router;