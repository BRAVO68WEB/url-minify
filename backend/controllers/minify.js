const Minfy = require("../models/minifed_urls")
const base_url = 'https://minfy.xyz/'

module.exports.getURLData = async (req, res) => {
   try {
      const { alias } = req.params
      const data = await Minfy.findOne({ alias: alias })
      data.minifiedUrl = base_url + data.alias
      return res.send(data)
   } catch (err) {
      console.error(err)
      res.sendStatus(500)
   }
}

module.exports.addURL = async (req, res) => {
   req.body.minifiedUrl = base_url + req.body.alias
   Minfy.create(req.body)
   .then((data)=>{
       res.send(data)
   })
   .catch((err)=>{
       console.error(err)
       res.sendStaus(500)
   })
}

module.exports.deleteUrlData = async (req,res) =>{
   Minfy.findByIdAndRemove(req.params.id)
   .then((data)=>{
      res.send("Successfully Deleted")
   })
   .catch((err)=>{
      console.error(err)
      res.sendStaus(500)
  })
}

module.exports.updateUrlData = async (req,res) =>{
   //find a data object with url's id and update the alias 
   Minfy.findByIdAndUpdate(req.params.id, {'alias': req.body.alias})
   .then((data)=>{
      //send back the updated data object
      res.send(data);
   })
   .catch((err)=>{
      //found error
      console.error(err)
      res.sendStaus(500)
  })
}
