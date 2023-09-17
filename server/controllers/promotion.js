const Promotion = require('../models/Promotion');

const postProduct = async (req, res) => {

    const reqData = req.body;

    if (reqData.name === undefined || reqData.description === undefined || reqData.discount === undefined || reqData.promotion_start_date === undefined || reqData.promotion_end_date === undefined || reqData.start_time === undefined || reqData.end_time === undefined || reqData.active_days == undefined || reqData.products === undefined) {

        res.status(400).send("Missing Post Data, please try again")

    } else {

        try {

            reqData.start_date = new Date(reqData.start_date)
            reqData.end_date = new Date(reqData.end_date)

            const result = await new Promotion(reqData).save();

            res.status(200).json(result);

        } catch (err) {
            
            res.status(400).send(err);

        }

    }

}

const getAllProducts = async (req, res) => {

    try {

        const result = await Promotion.find()

        if (!result || result == {} || result == []) {

            res.status(200).json("Empty Data Set");

        } else {

            res.status(200).json(result);

        }

    } catch (err) {

        res.status(400).send(err);

    }

}

const getProduct = async (req, res) => {

    try {

        const result = await Promotion.findById(req.params.id);

        if (!result || result == {} || result == []) {

            res.status(200).json("Empty Data Set");

        } else {

            res.status(200).json(result);

        }

    } catch (err) {

        res.status(400).send(err);

    }

}

const updateProduct = async (req, res) => {

    const reqData = req.body;

    try {
  
    const result = await Promotion.updateOne(
        {
            _id: req.params.id
        },
        {
            $set: {
                name: reqData.name,
                description: reqData.description,
                discount: reqData.discount,
                promotion_start_date: new Date(reqData.promotion_start_date),
                promotion_end_date: new Date(reqData.promotion_end_date),
                start_time: reqData.start_time,
                end_time: reqData.end_time,
                active_days: reqData.active_days,
                products: reqData.products
            }}
    )

    res.status(200).json(result);

    } catch (err) {

        res.status(400).send(err);

    }

}

const patchProduct = async (req, res) => {

    const reqData = req.body;

    try {
  
    const result = await Promotion.updateOne(
        {
            _id: req.params.id
        },
        {
            $set: {
                discount: reqData.discount,
            }
        }

    )

    res.status(200).json(result);

    } catch (err) {

        res.status(400).send(err);

    }
    
}

const deleteProduct = async (req, res) => {

    try {

        const result = await Promotion.deleteOne()    

        res.status(200).json(result);

    } catch (err) {
        
        res.status(400).json(err);

    }
        
}

const deleteAllProducts = async (req, res) => {

    try {

        const result = await Promotion.deleteMany()

        res.status(200).json(result);

    } catch (err) {

        res.status(400).json(err);

    }
       
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