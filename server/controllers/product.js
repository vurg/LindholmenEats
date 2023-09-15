// controllers/product.js
const Product = require('../models/Product');

const postProduct = (req, res) => {

    const reqData = req.body;

    if((reqData.name || reqData.price || reqData.description || reqData.restaurants) === undefined){

        res.status(400).send("Missing Post Data, please try again")

    } else {

        new Product(reqData).save()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).send(err.message))

    }

}

const getAllProducts = (req, res) => {

    Product.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).send(err.message))

}

const getProduct = (req, res) => {

    Product.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).send(err.message));

}

const updateProduct = (req, res) => {

    const reqData = req.body;

    Product.updateOne(
        {
            "_id": req.params.id
        },
        { $set: {
            name: reqData.name,
            price: reqData.price,
            description: reqData.description,
            restaurants: reqData.restaurants,
        }
    })
    .then((data) => res.status(200).json(reqData))
    .catch(err => res.status(500).send(err.message));

}

const patchProduct = (req, res) => {

    const reqData = req.body;

    Product.updateOne(
        {
            "_id": req.params.id
        },
        { $set: {
            name: reqData.name,
            price: reqData.price,
            description: reqData.description,
        }
    })
    .then((data) => res.status(200).json(reqData))
    .catch(err => res.status(500).send(err.message));
    
}

const deleteProduct = (req, res) => {

    Product.findByIdAndDelete(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch(err => res.status(500).send(err.message));
        
}

const deleteAllProducts = (req, res) => {

    Product.deleteMany()
    .then((data) => res.status(200).json(data))
    .catch(err => res.status(500).send(err.message));
       
}


module.exports = {
    postProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    patchProduct,
    deleteProduct,
    deleteAllProducts
}