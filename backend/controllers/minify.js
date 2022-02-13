const Minfy = require('../models/minifed_urls')
const base_url = 'https://minfy.xyz/'
const { nanoid } = require('nanoid')

module.exports.getAllData = async (req, res) => {
   Minfy.find({})
      .then((data) => {
         res.json(data)
      })
      .catch((err) => {
         console.error(err)
         res.sendStatus(500)
      })
}

module.exports.getURLData = async (req, res) => {
   try {
      const data = await Minfy.findOne({
         alias: req.params.alias,
      })
      // data.minifiedUrl = base_url + data.alias
      if (!data || data == null) {
         return res.json({ success: false, message: 'No data found' })
      } else {
         res.json({ success: true, data })
      }
   } catch (err) {
      console.error(err)
      res.sendStatus(500)
   }
}

module.exports.findUrlById = async (req, res) => {
   Minfy.findById(req.params.id)
      .then((data) => {
         res.send(data)
      })
      .catch((err) => {
         console.error(err)
         res.sendStatus(500)
      })
}

module.exports.addURL = async (req, res) => {
   req.body.alias = nanoid(5)
   req.body.minifiedUrl = base_url + req.body.alias
   Minfy.create(req.body)
      .then((data) => {
         res.json(data)
      })
      .catch((err) => {
         console.error(err)
         res.sendStatus(500)
      })
}

module.exports.deleteUrlData = async (req, res) => {
   Minfy.findByIdAndRemove(req.params.id)
      .then((data) => {
         res.send('Successfully Deleted')
      })
      .catch((err) => {
         console.error(err)
         res.sendStaus(500)
      })
}

module.exports.updateUrlData = async (req, res) => {
   //find a data object with url's id and update the alias
   Minfy.findByIdAndUpdate(req.params.id, { alias: req.body.alias })
      .then((data) => {
         //send back the updated data object
         res.send(data)
      })
      .catch((err) => {
         //found error
         console.error(err)
         res.sendStatus(500)
      })
}

module.exports.addURLAuthed = async (req, res) => {
   const { alias, originalUrl } = req.body
   var createdBy = req.user.data.email
   // console.log(req.user);
   const minifiedUrl = base_url + alias
   const data = {
      alias,
      originalUrl,
      minifiedUrl,
      createdBy,
   }
   Minfy.create(data)
      .then((data) => {
         res.send(data)
      })
      .catch((err) => {
         console.error(err)
         res.sendStatus(500)
      })
}
