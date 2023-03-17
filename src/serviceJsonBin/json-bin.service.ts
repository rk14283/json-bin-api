import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateJsonBinDto } from 'src/dto/createjsonBin.dto';
import { IJsonBin } from 'src/interface/jsonBin.interface';
import { Model } from 'mongoose';

import { UpdateJsonBinDto } from 'src/dto/updatejsonBin.dto';
@Injectable()
export class JsonBinService {
  constructor(@InjectModel('JsonBin') private JsonBinModel: Model<IJsonBin>) {}
  async createJsonBin(createJsonBinDto: CreateJsonBinDto): Promise<IJsonBin> {
    const newJsonBin = await new this.JsonBinModel(createJsonBinDto);
    return newJsonBin.save();
  }
  async getAllJsonBins(): Promise<IJsonBin[]> {
    const JsonBinData = await this.JsonBinModel.find();
    if (!JsonBinData || JsonBinData.length == 0) {
      throw new NotFoundException('json Bin not found!');
    }
    return JsonBinData;
  }
}
