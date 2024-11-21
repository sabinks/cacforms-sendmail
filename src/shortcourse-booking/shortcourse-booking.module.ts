import { Module } from '@nestjs/common';
import { ShortcourseBookingService } from './shortcourse-booking.service';
import { ShortcourseBookingController } from './shortcourse-booking.controller';
import { MailService } from 'src/mail/mail.service';

@Module({
  controllers: [ShortcourseBookingController],
  providers: [ShortcourseBookingService, MailService],
})
export class ShortcourseBookingModule {}
