const Alimento = require('../models/alimento')

const alimentoGet = async(req, res) => {
    const alimentos = await Alimento.find({ categoria: 'alimento' })
    res.json(alimentos);
}

const alimentoPost = (req, res) => {
    const { name, author } = req.body;

    res.json({ msg: "Post alimento controller", name, author });
}

// const alimentosGetBySKU = (req, res) => {
//     res.json({ msg: "get by SKU alimentos controller" });
// }

const alimentoPut = (req, res) => {
    res.json({ msg: "put alimento controller" });
}

const alimentoDelete = (req, res) => {
    res.json({ msg: "delete alimento controller" });
}

module.exports = {
    alimentoGet,
    alimentoPost,
    alimentoPut,
    alimentoDelete
}