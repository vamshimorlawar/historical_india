import mongoose, { Schema, model, Document } from "mongoose";

interface UserStatsDocument extends Document {
  user: mongoose.Schema.Types.ObjectId;
  points: Number;
  articlesCreated: Number;
  articlesEdited: Number;
}

const userStatsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  points: { type: Number, default: 0 },
  articlesCreated: { type: Number, default: 0 },
  articlesEdited: { type: Number, default: 0 },
});

export default mongoose.models.UserStats ||
  model<UserStatsDocument>("UserStats", userStatsSchema);
