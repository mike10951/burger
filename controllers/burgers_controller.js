var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne("burger_name", req.body.burger_name, function (result) {
        res.json({ id: result.insertId })
    })
});

router.put("/api/burgers/:id", function (req, res) {
    burger.updateOne(req.body.devoured, `id = ${req.params.id}`, function (result) {
        res.json({ id: result.insertId })
    })
});

module.exports = router;