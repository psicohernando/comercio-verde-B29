const Categoria = require('../models/categoria')

const categoriaExist = async (categoria = '') =>{
    let cate = await Categoria.findOne( { categoria } );
    if(!cate){
        throw new Error(`la categoria ${ categoria } no existe`);
    }
}

module.exports={
    categoriaExist
}