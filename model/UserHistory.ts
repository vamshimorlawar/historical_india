import mongoose, { Schema, model } from "mongoose";

interface UserHistoryDocument extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  articles: {
    edited: [
      {
        articleId: { type: mongoose.Schema.Types.ObjectId };
        articleTitle: { type: String };
        oldContent: { type: String };
        newContent: { type: String };
        message: { type: String };
        updatedAt: { type: Date };
      }
    ];

    created: [
      {
        articleId: { type: mongoose.Schema.Types.ObjectId };
        articleTitle: { type: String };
        oldContent: { type: String };
        newContent: { type: String };
        message: { type: String };
        updatedAt: { type: Date };
      }
    ];
  };
}

const userHistorySchema = new Schema<UserHistoryDocument>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  articles: {
    edited: [
      {
        articleId: { type: mongoose.Schema.Types.ObjectId },
        articleTitle: { type: String },
        oldContent: { type: String },
        newContent: { type: String },
        message: { type: String },
        updatedAt: { type: Date },
      },
    ],
    created: [
      {
        articleId: { type: mongoose.Schema.Types.ObjectId },
        articleTitle: { type: String },
        oldContent: { type: String },
        newContent: { type: String },
        message: { type: String },
        updatedAt: { type: Date },
      },
    ],
  },
});

export default mongoose.models.UserHistory ||
  model<UserHistoryDocument>("UserHistory", userHistorySchema);
