const express = require('express')
const getProducts = require('./getProducts')

const app = express()

app.get('/api/products', getProducts.getProducts)
app.get('/api/product/:id', getProducts.getId)


Port = 8888
app.listen(Port, () => console.log(`linstening on ${Port}`))