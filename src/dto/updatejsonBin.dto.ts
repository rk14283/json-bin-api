import { PartialType } from '@nestjs/mapped-types';
import { CreateJsonBinDto } from './createjsonBin.dto';

export class UpdateJsonBinDto extends PartialType(CreateJsonBinDto) {}
