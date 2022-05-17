import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from 'src/services/app.service';

describe('AppController', () => {
  let appService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return "Hello Fishstop from CPE393!"', () => {
      expect(appService.getHello()).toBe('Hello Fishstop from CPE393!');
    });
  });
});
