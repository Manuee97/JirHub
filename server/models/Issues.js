const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issuesSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    assigned: [{
        type: Schema.Types.ObjectId,
        ref: "User"
      }],
    creator: [{
        type: Schema.Types.ObjectId,
        ref: "User"
      }],
    isFinish: { type: Boolean, default: false },
    comentario: { type: String, required: true },
    comentariosIssues: [{ type: String }]
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

const Issues = mongoose.model("Issues", issuesSchema);
module.exports = Issues;
