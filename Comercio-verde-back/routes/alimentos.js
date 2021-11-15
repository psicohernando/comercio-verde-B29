const { Router } = require('express');
const { check } = require('express-validator');

const {
    categoriaExist
} = require('../helpers/validaciones')
const { validateDate } = require('../middlewares/validacionerrores')

const router = Router();

const {
    alimentoGet,
    alimentoPost,
    alimentoPut,
    alimentoDelete
} = require('../controllers/alimentos')

router.get('/', alimentoGet);

router.post('/', [
    check('categoria').custom(categoriaExist),
    validateDate
], alimentoPost);

router.put('/', alimentoPut);

router.delete('/', alimentoDelete);

module.exports = router;