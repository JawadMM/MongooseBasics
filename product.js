const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("CONNCTED");
  })
  .catch(() => {
    console.log("ERROR");
  });

mongoose.set("strictQuery", true);

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({
  name: "Bike Helmet",
  price: 19.5,
  categories: ["Cycling", "Safety"],
});
bike
  .save()
  .then((data) => {
    console.log("Worked");
    console.log(data);
  })
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });
