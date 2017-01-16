/**
 * Created by ofrisourasky on 1/16/17.
 */
var express = require('express')
var app = express()



app.get('/', function (req, res, next) {

    var options = {
        root: __dirname + 'BootcampDay2',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    var fileName = req.params.name;
    res.sendFile(app.html, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent:', app.html);
        }
    });

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})