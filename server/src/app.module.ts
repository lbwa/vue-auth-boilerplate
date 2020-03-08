import { Module } from '@nestjs/common'
import { AppController } from './app/app.controller'
import { AppService } from './app/app.service'
import { UserModule } from './user/user.module'

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
