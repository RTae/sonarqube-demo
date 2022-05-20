import { AppController } from 'src/controllers/app.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from 'src/services/app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hi Fishstop from CPE393!!!"', () => {
      expect(appController.getHello()).toBe('Hi Fishstop from CPE393!!!');
    });
  });
});
