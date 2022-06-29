const item = require('express')()
const itemController = require('../../controller/item')

item.post('/catalogue', itemController.postItem)
item.delete('/catalogue/:id', itemController.deleteItem)
item.put('/catalogue/:id', itemController.updateItem)
item.get('/catalogue', itemController.lookItem)
item.get('/catalogue/:id', itemController.lookItemById)

module.exports = item
