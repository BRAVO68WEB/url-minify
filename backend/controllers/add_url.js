const db = require("../models/minifed_urls")

module.exports.addURL = async (req, res) => {
   db.create(req.body)
   .then((data)=>{
       res.send(data)
   })
   .catch((err)=>{
       console.error(err)
       res.sendStaus(500)
   })
}