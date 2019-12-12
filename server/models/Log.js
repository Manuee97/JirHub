const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema(
  {
    text: { type: String, required: true },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        delete ret.createdAt;
        return ret;
      }
    }
  }
);

const Log = mongoose.model("Log", logSchema);
module.exports = Log;
