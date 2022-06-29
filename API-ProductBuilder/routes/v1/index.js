const v1 = require('express')()
const item = require('./item')

v1.use('/item', item)

module.exports = v1
