import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ContactService } from "../services/contact.service";
import { ContactResponseType } from "../responses/contact.response";
import { CreateContactMessageDTO } from "../dtos/contact.dto";

@ApiTags('Contact')
@Controller('contact')
export class ContactController {
    constructor (
        private contactService: ContactService
    ) {}

    @Post('')
    @ApiOperation({ description: 'Get Contact Me' })
    @HttpCode(200)
    @ApiResponse({
        status: 200,
        description: 'Information requested',
        type: ContactResponseType,
        isArray: false,
    })
    @ApiBody({
        type: CreateContactMessageDTO
    })
    async getContact(@Body() data: CreateContactMessageDTO ): Promise<ContactResponseType> {
        return await this.contactService.sendContact(data);
    }

}