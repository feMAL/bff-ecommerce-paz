import { Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AboutService } from "../services/about.service";
import { AboutResponseType } from "../responses/about.response";

@ApiTags('About')
@Controller('about')
export class AboutController {
    constructor (
        private aboutService: AboutService
    ) {}

    @Get(':about')
    @ApiOperation({ description: 'Get About Me' })
    @HttpCode(200)
    @ApiResponse({
        status: 200,
        description: 'Information requested',
        type: AboutResponseType,
        isArray: false,
    })
    async getAbout(@Param('about') about: string ): Promise<AboutResponseType> {
        return await this.aboutService.getAbout(about);
    }

}