var db = require("../models");

var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {

        res.render("index")
    })

    app.get("/view/protege/:id", function(req, res) {
        var id = req.params.id
        console.log(id)
        // var protege 

        db.protege.findOne({
            where: {
                id
            }
        }).then(function(dbProtege) {
            // console.log(dbProtege)
            console.log(dbProtege.dataValues)
            res.render("protege", dbProtege.dataValues)
        })
    })





}