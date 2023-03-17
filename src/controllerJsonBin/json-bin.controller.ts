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

  @Get('/:id')
  async getJsonBin(@Res() response, @Param('id') JsonBinId: string) {
    try {
      const existingJsonBin = await this.JsonBinService.getJsonBin(JsonBinId);
      return response.status(HttpStatus.OK).json({
        message: 'Json bin found successfully',
        existingJsonBin,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Put('/:id')
  async updateJsonBin(
    @Res() response,
    @Param('id') JsonBinId: string,
    @Body() updateJsonBinDto: UpdateJsonBinDto,
  ) {
    try {
      const existingJsonBin = await this.JsonBinService.updateJsonBin(
        JsonBinId,
        updateJsonBinDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Json Bin has been successfully updated',
        existingJsonBin,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @Delete('/:id')
  async deleteJsonBin(@Res() response, @Param('id') JsonBinId: string) {
    try {
      const deletedJsonBin = await this.JsonBinService.deleteJsonBin(JsonBinId);
      return response.status(HttpStatus.OK).json({
        message: 'JSON Bin has been deleted successfully',
        deletedJsonBin,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
