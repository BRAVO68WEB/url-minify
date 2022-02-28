const Viewer = require('../models/viewer_count')

module.exports.viewer  = async function (req, res) {


    // Storing the records from the Visitor table
    let visitors = await Viewer.findOne({name: 'localhost'})

    // If the app is being visited first
    // time, so no records
    if (visitors == null) {

        // Creating a new default record
        const beginCount = new Viewer({
            name: 'localhost',
            count: 1
        })

        // Saving in the database
        beginCount.save()

        // Sending thee count of visitor to the browser
        res.send(`<h2>Counter: ` + 1 + '</h2>')

        // Logging when the app is visited first time
        console.log("First visitor arrived")
    } else {

        // Incrementing the count of visitor by 1
        visitors.count += 1;

        // Saving to the database
        visitors.save()

        // Sending the count of visitor to the browser
        res.send(`<h2>Counter: ` + visitors.count + '</h2>')

        // Logging the visitor count in the console
        console.log("visitor arrived: ", visitors.count)
    }
}