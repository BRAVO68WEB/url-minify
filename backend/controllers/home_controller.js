const package = require('../package.json')

module.exports.home = function (req, res) {
   return res.json({
      name: package.name,
      version: package.version,
      description: package.description,
      github: package.homepage,
   })
}
