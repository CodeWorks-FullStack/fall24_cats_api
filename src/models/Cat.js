import { Schema } from "mongoose";

export const CatSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 100, minlength: 2 },
    numberOfLegs: { type: Number, required: true, min: 0, max: 4, default: 4 },
    likesCheese: { type: Boolean },
    color: { type: String, required: true, maxlength: 25 }
  }
)