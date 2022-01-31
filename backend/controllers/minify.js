const Minfy = require("../models/minifed_urls")

module.exports.getURLData = async (req,res) => {
    try {
        const {alias} = req.params;
        const data = await Minfy.findOne({minifiedUrl: alias});

        return res.send( data);
    }catch(err){
        console.error(err)
        res.sendStatus(500)
    }
}