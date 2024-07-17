const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const BookingSchema = new Schema({
  placeId: { type: Schema.Types.ObjectId, required: true, ref: "Place" },
  user: { type: Schema.Types.ObjectId, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  price: Number,
});

const BookingModel = mongoose.model("Booking", BookingSchema);

module.exports = BookingModel;
