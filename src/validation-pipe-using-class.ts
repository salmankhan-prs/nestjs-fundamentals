import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { IsString, IsInt, validate } from 'class-validator';

export class CreateCatDtoPipeTest {
    @IsString()
    name: string;

    @IsInt()
    age: number;


}

export class validationPipeUsingClassValidator implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        const { metatype } = metadata
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = plainToInstance(metatype, value);
        const errors = await validate(object)
        console.log({ errors })
        if (errors.length > 0) {
            throw new BadRequestException('Validation failed from class transfomer pipe ');
        }
        return value;
    }
    private toValidate(metatype: Function): boolean {
        console.log({ metatype })
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
}
