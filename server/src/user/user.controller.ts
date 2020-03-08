import {
  Controller,
  Post,
  Get,
  Body,
  HttpCode,
  HttpStatus
} from '@nestjs/common'
import { UserService } from './user.service'
import { GetUserProfileDto } from './user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('profile')
  @HttpCode(HttpStatus.OK)
  getUserProfile(
    // POST request headers must include 'content-type': 'application/json'
    // otherwise, always get a empty object
    // https://stackoverflow.com/a/50646964
    @Body() { username, password }: GetUserProfileDto
  ) {
    return this.userService.findProfile(username, password)
  }

  @Get('abilities')
  getUserAbilities() {
    return this.userService.fineAbilities()
  }
}
