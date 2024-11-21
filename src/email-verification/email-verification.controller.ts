import { Controller } from '@nestjs/common';
import { EmailVerificationService } from './email-verification.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('email-verification')
export class EmailVerificationController {
  constructor(
    private readonly emailVerificationService: EmailVerificationService,
  ) {}

  @EventPattern('email-verification')
  handleEmailVerification(payload: any) {
    this.emailVerificationService.emailVerification(payload);
  }
}
