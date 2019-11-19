var db = require("../models");

var path = require("path");

module.exports = function(app) {



    app.put("/api/protege/cpdials/:id", function(req, res) {

        id = req.params.id

        db.protege.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function(dbProtege) {
            res.json(dbProtege)
            // res.render(dbProtege.dataValues)
        })
    })

    app.put("/api/protege/bpdials/:id", function(req, res) {

        id = req.params.id

        db.protege.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function(dbProtege) {
            res.json(dbProtege)
        })
    })


    app.put("/api/protege/ccdials/:id", function(req, res) {
        id = req.params.id

        db.protege.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function(dbProtege) {
            res.json(dbProtege)
        })
    })

    app.put("/api/protege/bcdials/:id", function(req, res) {

        db.protege.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function(dbProtege) {
            res.json(dbProtege)
        })
    })

}