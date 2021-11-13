const Artesania = require('../models/artesania')

const artesaniaGet = async (req, res) => {
    const artesanias = await Artesania.find({categoria: 'artesania'})
    res.json(artesanias);
}

const artesaniaPost = (req, res) => {
    const { name, author } = req.body;

    res.json({ msg: "Post artesania controller", name, author });
}

// const artesaniaGetBySKU = (req, res) => {
//     res.json({ msg: "get by SKU artesania controller" });
// }

const artesaniaPut = (req, res) => {
    res.json({ msg: "put artesania controller" });
}

const artesaniaDelete = (req, res) => {
    res.json({ msg: "delete artesania controller" });
}

module.exports = {
    artesaniaGet,artesaniaPost,artesaniaPut,artesaniaDelete
}