import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  HttpStatus
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    /**
     * response mapping
     * @doc https://docs.nestjs.com/interceptors#response-mapping
     */
    return next.handle().pipe(
      map(data => ({
        statusCode: HttpStatus.OK,
        data
      }))
    )
  }
}
