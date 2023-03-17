import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateJsonBinDto } from 'src/dto/createjsonBin.dto';
import { IJsonBin } from 'src/interface/jsonBin.interface';
import { Model } from 'mongoose';

import { UpdateJsonBinDto } from 'src/dto/updatejsonBin.dto';
@Injectable()
export class JsonBinService {
  constructor(@InjectModel('JsonBin') private JsonBinModel: Model<IJsonBin>) {}
  //create Json Bin
  async createJsonBin(createJsonBinDto: CreateJsonBinDto): Promise<IJsonBin> {
    const newJsonBin = await new this.JsonBinModel(createJsonBinDto);
    return newJsonBin.save();
  }
  //get all Json Bins
  async getAllJsonBins(): Promise<IJsonBin[]> {
    const JsonBinData = await this.JsonBinModel.find();
    if (!JsonBinData || JsonBinData.length == 0) {
      throw new NotFoundException('json Bin not found!');
    }
    return JsonBinData;
  }
  //get one Json Bin by Id
  async getJsonBin(JsonBinId: string): Promise<IJsonBin> {
    const existingJsonBin = await this.JsonBinModel.findById(JsonBinId).exec();
    if (!existingJsonBin) {
      throw new NotFoundException(`Bin #${JsonBinId} not found`);
    }
    return existingJsonBin;
  }
  //update Json Bin
  async updateJsonBin(
    JsonBinId: string,
    updateJsonBinDto: UpdateJsonBinDto,
  ): Promise<IJsonBin> {
    const existingJsonBin = await this.JsonBinModel.findByIdAndUpdate(
      JsonBinId,
      updateJsonBinDto,
      { new: true },
    );
    if (!existingJsonBin) {
      throw new NotFoundException(`JSON Bin #${JsonBinId} not found`);
    }
    return existingJsonBin;
  }
  //delete JSON Bin
  async deleteJsonBin(JsonBinId: string): Promise<IJsonBin> {
    const deletedJsonBin = await this.JsonBinModel.findByIdAndDelete(JsonBinId);
    if (!deletedJsonBin) {
      throw new NotFoundException(`JSON Bin #${JsonBinId} not found`);
    }
    return deletedJsonBin;
  }
}
