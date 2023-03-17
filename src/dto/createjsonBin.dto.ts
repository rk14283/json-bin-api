import { IsNotEmpty, IsString } from 'class-validator';

export class CreateJsonBinDto {
  @IsString()
  @IsNotEmpty()
  readonly message: string;
}
