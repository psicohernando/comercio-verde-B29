const mongoose = require('mongoose');

const dbConnection = async () =>{
    await mongoose.connect('mongodb://localhost:27017/ComercioVerde')
        .then(() => console.log("Connect mongoDB ready"))
        .catch(err => {
            console.log(`Error connect mongoDB: ${ err }`);
            throw new Error('Error al conectar la DB');
        });
}

module.exports = {
    dbConnection
}