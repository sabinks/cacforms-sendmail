import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});
  app.connectMicroservice({
    global: true,
    transport: Transport.RMQ,
    name: 'MAIL_SERVICE',
    options: {
      urls: [
        process.env.NODE_ENV == 'development'
          ? 'amqp://localhost:5672'
          : `${process.env.RBMQ_URL}`,
      ],
      queue: 'mail_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  const env = process.env.NODE_ENV;
  console.log('environment:', env);
  const port = process.env.PORT;
  await app.startAllMicroservices();
  await app.listen(port);
  console.log('Main App running on:' + port);
}
bootstrap();
