const mongoose = require('mongoose');


new mongoose.Schema(
    {
        id: mongoose.Types.ObjectId,
        title: { type: String, trim: true, required: true },
        price: { type: Number, required: true },
        discount: { type: Number, default: 0 },
        category: {
            main: { type: String, required: true },
            sub: { type: String, required: true },
        },

        gender: { type: String },
        size: { type: [String] },
        color: { type: [String] },
        stock: { type: Number, required: true },
        images: { type: [String], required: true },
        description: { type: String, default: '' },
        rating: { type: Number, default: 0 },
        reviews: { type: Number, default: 0 },
        details: { type: String, default: '' },
        brand: { type: String, default: 'No Brand' },
        shipping: { type: String, default: 'free' },
        warrenty: { type: String, default: 'No Warrenty' },
        tags: { type: [String], default: [] },
    },
    { timestamps: true },
);


module.exports = {
    Product: mongoose.model("Product", productSchema)
};


