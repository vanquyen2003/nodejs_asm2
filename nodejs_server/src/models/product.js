import mongoose from "mongoose";
// import mongoosePaginate from "mongoose-paginate-v2"
// const { Schema } = mongoose;
const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    original_price: {
        type: Number
    },
    image: {
        type: String
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "category"
    }
}, {
    timestamps: true,
    versionKey: false
})
// productSchema.plugin(mongoosePaginate)

export default mongoose.model('products', productSchema)