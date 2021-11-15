const { Schema, model } = require('mongoose')

const productSchema = Schema({
    categoria: {
        type: String,
        required: [true, '**** Db: La categoria es requerida']
    },
    nombre: {
        type: String,
        required: [true, '**** Db: El nombre es requerido'],
        unique: true
    },
    precio: {
        type: Number,
        required: [true, '**** Db: El precio es requerido']
    },
    img: {
        type: String
    },
    stock: {
        type: Number,
        required: true
    },
    dcto: {
        type: Number,
        default: 0
    },
    descripcion: {
        type: String
    }
});

// productSchema.methods.toJSON = function(){
//     const { __v, _id, password, ...user } = this.toObject();
//     user.userId = _id;
//     return user;
// }

module.exports = model('Product', productSchema);