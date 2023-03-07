"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.get('/', function (req, res) {
    var code = req.query.chuj;
    if (code === "pizda") {
        return res.send({
            success: false,
            data: {
                code: 400,
                message: "pizda"
            }
        });
    }
    res.send({
        success: true,
        data: {
            code: 200,
            message: "chuj1234"
        }
    });
});
app.listen(3000, function () {
    console.log('Serwer uruchomiony na porcie 3000');
});
