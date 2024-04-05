import { IsEmail, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateContactMessageDTO {

    @IsString()
    @ApiProperty({
        type: String,
        required:true
    })
    name: string;

    @IsString()
    @ApiProperty({
        type: String,
        required: true
    })
    lastname: string;

    @IsEmail()
    @ApiProperty({
        type: String,
        required:true
    })
    mail: string;

    @IsString()
    @ApiProperty({
        type: String,
        required:false
    })
    details: string

}