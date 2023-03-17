//instead of student use jsonBin

import { Document } from 'mongoose';
export interface IJsonBin extends Document {
  readonly message: string;
}
