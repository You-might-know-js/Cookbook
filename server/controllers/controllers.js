const mongoose = require('mongoose')


exports.root = (req, res) => {
    res.render('index')
}

exports.publish = (req, res) => {
    res.render('post')
}
