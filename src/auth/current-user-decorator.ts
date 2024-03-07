import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { UserPayload } from "./jwt.strategy";

export const CurrentUser = createParamDecorator(
  (_: never, context: ExecutionContext) => {
    const resquest = context.switchToHttp().getRequest()

    return resquest.user as UserPayload
  }
)