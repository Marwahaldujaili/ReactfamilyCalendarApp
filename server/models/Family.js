import { Schema, model } from "mongoose";

const familySchema = new Schema({
  familyName: { type: String, required: true },
  creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const FamilyGroup = new model("FamilyGroup", familySchema);

export default FamilyGroup;
