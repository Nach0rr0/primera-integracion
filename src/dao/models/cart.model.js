import mongoose from 'mongoose'

const cartCollection = 'cart'

const productSchema = mongoose.Schema({
	productId: {
		type: String,
		unique: true
	},
	price: Number,
	quantity: Number
})

const cartSchema = new mongoose.Schema({
	products: [productSchema]
})

const cartModel = mongoose.model(cartCollection, cartSchema)

export default cartModel