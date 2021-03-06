const express = require('express')
const app = express()

const product = {
    "total": 6,
    "data": [{
			"id": 1,
			"name": "Pepsi Max",
			"image": "https://i.imgur.com/VYJihfV.png",
			"price": 15.0,
			"in_stock": true
		},
		{
			"id": 2,
			"name": "Pepsi Diet",
			"image": "https://i.imgur.com/VYJihfV.png",
			"price": 20.0,
			"in_stock": false
		},
		{
			"id": 3, 
			"name": "Coke",
			"image": "https://i.imgur.com/Xe1Ivcu.png",
			"price": 15.0,
			"in_stock": true
		},
		{
			"id": 4,
			"name": "Coke Vanilla (S)",
			"image": "https://i.imgur.com/Xe1Ivcu.png",
			"price": 20.0,
			"in_stock": false
		},
		{
			"id": 6,
			"name": "Coke Vanilla (L)",
			"image": "https://i.imgur.com/Xe1Ivcu.png",
			"price": 25.0,
			"in_stock": true
		},
		{
			"id": 7,
			"name": "Mountain Dew",
			"image": "https://i.imgur.com/FynmODM.jpg",
			"price": 13.0,
			"in_stock": true
		}
	]
};




app.get('/h', (req, res) => {
  res.status(200).json(product)
})


module.exports = {
	path: "/api/",
	handler: app
}