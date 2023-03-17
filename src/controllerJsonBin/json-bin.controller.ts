import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateJsonBinDto } from 'src/dto/createjsonBin.dto';
import { UpdateJsonBinDto } from 'src/dto/updatejsonBin.dto';
import { JsonBinService } from 'src/serviceJsonBin/json-bin.service';
@Controller('JsonBin')
export class JsonBinController {
  constructor(private readonly JsonBinService: JsonBinService) {}

  //create bin
  @Post()
  async createJsonBin(
    @Res() response,
    @Body() createJsonBinDto: CreateJsonBinDto,
  ) {
    try {
      const newJsonBin = await this.JsonBinService.createJsonBin(
        createJsonBinDto,
      );
      return response.status(HttpStatus.CREATED).json({
        message: 'new bin created successfully',
        newJsonBin,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: bin not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async getJsonBins(@Res() response) {
    try {
      const JsonBinData = await this.JsonBinService.getAllJsonBins();
      return response.status(HttpStatus.OK).json({
        message: 'All Json Bins found successfully',
        JsonBinData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
