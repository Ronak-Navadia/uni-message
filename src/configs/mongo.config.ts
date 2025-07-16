import { ConfigService } from '@nestjs/config';

export const buildMongoOptions = (configService: ConfigService) => {
  const host = configService.get<string>('DB_HOST', 'localhost');
  const port = configService.get<string>('DB_PORT', '27017');
  const dbName = configService.get<string>('DB_NAME', 'test');
  const user = configService.get<string>('DB_USER');
  const pass = configService.get<string>('DB_PASS');
  const retryAttempts = configService.get<string>('RETRY_ATTEMPTS') || 5;
  const retryDelay = configService.get<string>('RETRY_ATTEMPTS') || 3000;

  const credentials =
    user && pass
      ? `${encodeURIComponent(user)}:${encodeURIComponent(pass)}@`
      : '';

  const uri = `mongodb://${credentials}${host}:${port}/${dbName}`;

  return {
    uri,
    retryAttempts: +retryAttempts,
    retryDelay: +retryDelay,
  };
};
