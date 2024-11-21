import { Injectable } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class ShortcourseBookingService {
  constructor(private mailer: MailService) {}
  async shortcourseBooking(payload: any) {
    this.mailer.shortcourseBooking(payload);
  }
}
