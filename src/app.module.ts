import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JsonBinController } from './controllerJsonBin/json-bin.controller';
import { JsonBinSchema } from './schema/jsonBin.schema';
import { JsonBinService } from './serviceJsonBin/json-bin.service';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/jsonBinDb'),
    MongooseModule.forFeature([{ name: 'JsonBin', schema: JsonBinSchema }]),
  ],
  controllers: [AppController, JsonBinController],
  providers: [AppService, JsonBinService],
  //exports: [MongooseModule, JsonBinService],
})
export class AppModule {}
