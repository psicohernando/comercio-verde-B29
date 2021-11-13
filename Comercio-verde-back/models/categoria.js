const { Schema, model } = require('mongoose')

const categoriaSchema = Schema({
    categoria: {
        type: String
    }
});


module.exports = model('Categoria', categoriaSchema);