import { Document, ObjectId } from "mongoose";

export interface IMenu extends Document {
  name: string;
  description: string;
  price: number;
}
