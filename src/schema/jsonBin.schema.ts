import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class JsonBin {
  @Prop()
  message: string;
}

export const JsonBinSchema = SchemaFactory.createForClass(JsonBin);
