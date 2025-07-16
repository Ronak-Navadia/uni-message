import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  mongoose.connection.on('connected', () => {
    console.log('✅ MongoDB connected successfully!');
  });

  mongoose.connection.on('error', (err) => {
    console.error('❌ MongoDB connection error:', err);
  });
  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
