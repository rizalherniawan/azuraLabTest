const { item } = require('../models')
const { Op } = require('sequelize')
const errorHandler = require('../helper/errorHandler')

class itemController {
    static async postItem(req,res){
        try {
            const payload = {
                name: req.body.name,
                category: req.body.category,
                price: req.body.price,
                stocks: req.body.stocks,
                description: req.body.description
            }
            await item.create(payload)
            return res.status(200).json({message: "Item successfully added"})   
        } catch (error) {
            const er = errorHandler(error)
            er ? res.status(400).json({message: er}) : res.status(500).json({message: "Bad network"})
        }
    }
    static async lookItem(req,res){
        try {
            const name  = req.body.name
            const items = await item.findAll(
                {
                    attributes: ['id','name','price','category']
                }
                ,{
                    where: name ? 
                {name : {
                    [Op.iLike] : name.split(' ').length > 2 ? name.split(' ').join('%') : name.concat('%')}
                } : null})
            if(!items) return res.status(500).json({message: "item not found"})
            return res.status(200).json({data: items}) 
        } catch (error) {
            res.status(500).json({message: "Bad network"})
        }
    }
    static async lookItemById(req,res) {
        try {
            const { id } = req.params
            const itemById = await item.findByPk(id)
            if(!itemById) return res.status(200).json({message: "item not found"})
            return res.status(200).json({data: itemById})
        } catch (error) {
            res.status(500).json({message: "Bad network"})
        }
    }
    static async updateItem(req,res){
        try {
            const id = req.params.id
            const payload = {
                name: req.body.name,
                category: req.body.category,
                price: req.body.price,
                stocks: req.body.stocks,
                description: req.body.description
            }
            const lookItem = item.findOne({where: {id: req.params.id}})
            if(!lookItem) return res.status(400).json({message: "item does not exist"})
            await item.update(payload, {where: {
                id: id
            }})
            return res.status(200).json({message: "Item successfully updated"})   
        } catch (error) {
            const er = errorHandler(error)
            er ? res.status(400).json({message: er}) : res.status(500).json({message: "Bad network"})
        }
    }
    static async deleteItem(req,res){
        try {
            const id = req.params.id
            const lookItem = item.findOne({where: {id: req.params.id}})
            if(!lookItem) return res.status(400).json({message: "item does not exist"})
            await item.destroy({where: {id: id}})
            return res.status(200).json({message: "Item successfully deleted"})
        } catch (error) {
            res.status(500).json({message: "Bad network"})
        }
    }
}

module.exports = itemController