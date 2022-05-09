const Minfy = require('../models/minifed_urls')
const base_url = 'https://minfy.xyz/'
const { nanoid } = require('nanoid')
const axios = require('axios')

const blackListedAliases = [
   '404',
   'dashboard',
   'qr',
   'credits',
   'github',
   'admin',
   'geo',
   'all',
   'me',
   'go',
   'upload',
   'download',
   'link',
   'about',
   'tos',
   'faqs',
   'privacy',
   'contact',
   'terms',
   'help',
   'api',
   'api-docs',
   'auto',
]

function verifyAlias(alias) {
   const boolean = blackListedAliases.find((element) => element === alias)
   return boolean
}
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

module.exports.getAliasStatus = async (req, res) => {
   try {
      const alias = req.params.alias
      const aliasStatus = await Minfy.findOne({ alias })

      if (!aliasStatus) {
         return res.status(200).json({ success: true })
      } else {
         return res.status(400).json({ success: false })
      }
   } catch (error) {
      console.error(error)
   }
}

module.exports.addURL = async (req, res) => {
   const alias = nanoid(5)
   const minifiedUrl = base_url + alias

   try {
      const aliasPresent = await Minfy.findOne({ alias })
      if (aliasPresent) {
         return res.status(400).json({ success: false })
      }
   } catch (error) {
      console.error(error)
   }

   Minfy.create({
      originalUrl: req.body.originalUrl,
      alias: alias,
      minifiedUrl: minifiedUrl,
   })
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
   var { alias, originalUrl } = req.body
   if (alias === undefined) {
      return res
         .status(400)
         .json({ success: false, message: 'Alias is required' })
   } else if (alias === 'auto') {
      alias = nanoid(5)
   }
   if (verifyAlias(alias)) {
      res.sendStatus(500)
      throw new Error('This alias cannot be used, try some another.')
   }

   var createdBy = req.user.data.email
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

module.exports.visitor = async (req, res) => {
   // console.log(req.ip)
   const config = {
      url: 'https://ip.zxq.co/' + req.ip,
      method: 'GET',
   }
   axios(config)
      .then((response) => {
         switch(response.data.continent){
         case 'AS': 
            Minfy.findOneAndUpdate(
               { alias: req.params.alias },
               {
                  $inc: {
                     views: 1,
                     'viewedFrom.AS': 1,
                  },
               },
               { new: true }
            )
               .then((data) => {
                  res.send(`views increased`)
               })
               .catch((err) => {
                  console.error(err)
                  res.sendStatus(500)
               })
         break;
         case 'NA':
            Minfy.findOneAndUpdate(
               { alias: req.params.alias },
               {
                  $inc: {
                     views: 1,
                     'viewedFrom.NA': 1,
                  },
               },
               { new: true }
            )
               .then((data) => {
                  res.send(`views increased`)
               })
               .catch((err) => {
                  console.error(err)
                  res.sendStatus(500)
               })
         break;
         case 'SA': 
            Minfy.findOneAndUpdate(
               { alias: req.params.alias },
               {
                  $inc: {
                     views: 1,
                     'viewedFrom.SA': 1,
                  },
               },
               { new: true }
            )
               .then((data) => {
                  res.send(`views increased`)
               })
               .catch((err) => {
                  console.error(err)
                  res.sendStatus(500)
               })
         break;
         case 'OC': 
            Minfy.findOneAndUpdate(
               { alias: req.params.alias },
               {
                  $inc: {
                     views: 1,
                     'viewedFrom.OC': 1,
                  },
               },
               { new: true }
            )
               .then((data) => {
                  res.send(`views increased`)
               })
               .catch((err) => {
                  console.error(err)
                  res.sendStatus(500)
               })
         break;
         case 'EU': 
            Minfy.findOneAndUpdate(
               { alias: req.params.alias },
               {
                  $inc: {
                     views: 1,
                     'viewedFrom.EU': 1,
                  },
               },
               { new: true }
            )
               .then((data) => {
                  res.send(`views increased`)
               })
               .catch((err) => {
                  console.error(err)
                  res.sendStatus(500)
               })
         break;
         case 'AF': 
            Minfy.findOneAndUpdate(
               { alias: req.params.alias },
               {
                  $inc: {
                     views: 1,
                     'viewedFrom.AF': 1,
                  },
               },
               { new: true }
            )
               .then((data) => {
                  res.send(`views increased`)
               })
               .catch((err) => {
                  console.error(err)
                  res.sendStatus(500)
               })
         break;
         default:
            Minfy.findOneAndUpdate(
               { alias: req.params.alias },
               {
                  $inc: {
                     views: 1,
                     'viewedFrom.UKN': 1,
                  },
               },
               { new: true }
            )
               .then((data) => {
                  console.log(data)
                  res.send(`views increased`)
               })
               .catch((err) => {
                  console.error(err)
                  res.sendStatus(500)
               })
         }
      })
      .catch((err) => {
         res.send(err)
      })
}

module.exports.getAllurlsforUser = async (req, res) => {
   Minfy.find({ createdBy: req.user.data.email })
      .then((data) => {
         res.send(data)
      })
      .catch((err) => {
         console.error(err)
         res.sendStatus(500)
      })
}
