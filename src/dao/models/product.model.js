import mongoose from 'mongoose'

const productCollection = 'product'

const productsSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	code: {
		type: String,
		required: true,
		unique: true
	},
	price: {
		type: Number,
		required: true
	},
	status: {
		type: Boolean,
		required: true
	},
	stock: {
		type: Number,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	thumbnails: [String]
})

const productModel = mongoose.model(productCollection, productSchema)

export default productModel
