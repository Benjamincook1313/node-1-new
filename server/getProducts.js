const products = require('../products.json')

module.exports = {

  getProducts: (req, res) => {
    const { price } = req.query
    if(price){
    const items = products.filter(num => num.price >= price * 1)
    return res.status(200).send(items)
    }
  },

  getId: (req, res)=>{
    const { id } = req.params
    const item = products.find(items => items.id == id)
    if(!item){
      return res.status(500).send('item not in list')
    }
    res.status(200).send(item)
  },

}